import React, {Component} from 'react';
import ExclusionListItem from  './ExclusionListItem';
import $ from 'jquery';


class ExclusionList extends Component {
  constructor() {
    super();
    this.state = {
      exclusionList: [],
    }
  }

  componentDidMount() {
    this.getExclusionList();
  }

  getExclusionList() {
    $.ajax({
      url: 'https://hadoop-backup-catalog.web.cern.ch/exclusion-list/3/',
      dataType: 'json',
      cache: 'false',
      contentType: 'application/json',
      success: function(data) {
        this.setState({exclusionList: data}, function() {
          console.log(this.state);
        })
      }.bind(this),
      error: function(xhr, status, err) {
        console.log(err);
      }
    })
  }

  render()  {
    let exclusionListItems = this.state.exclusionList.map(exclusionList =>  {
      return (
        <ExclusionListItem key={exclusionList.id} exclusionList = {exclusionList} />
      );
    });
    return(
      <div className="ExclusionList">
        <div className="container">
         <div>
          {exclusionListItems}
         </div>  
        </div>
      </div>
    );
  }
}

export default ExclusionList;
