import React, { Component } from 'react';
import HomeDataItem from './HomeDataItem';
import $ from 'jquery';


class HomeData extends Component {
  constructor() {
    super();
    this.state = {
      homeApplicationData: [],
    }
  }

  componentDidMount() {
    this.getApplicationsData();
  }

  getApplicationsData() {
    $.ajax({
      url: 'https://hadoop-backup-catalog.web.cern.ch/applications/' + (this.props.username) + '/',
      dataType: 'json',
      cache: 'false',
      contentType: 'application/json',
      success: function(data) {
        this.setState({homeApplicationData: data}, function() {
          console.log(this.state);
        })
      }.bind(this),
      error: function(xhr, status, err) {
        console.log(err);
      }
    })
  }

  render() {
    let homeDataItems = this.state.homeApplicationData.map(homeApplicationData =>  {
      return (
        <HomeDataItem key={homeApplicationData.id} homeApplicationData = {homeApplicationData} username={this.props.username} />
      );
    });

    return(
      <div className="HomeData">
        <div className="container">
          <div className="row">
           <div>
              {homeDataItems}
           </div>  
          </div>
        </div>
      </div>
    );
  }
}

export default HomeData;
