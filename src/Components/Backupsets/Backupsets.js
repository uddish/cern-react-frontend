import React, {Component} from 'react';
import BackupsetsItem from './BackupsetsItem';
import $ from 'jquery';
import {Pager} from 'react-bootstrap';


class Backupsets extends Component  {
  constructor() {
    super();
    this.state = {
      backupsets: [],
      pageCount: 1
    }
    this.previousButtonClicked = this.previousButtonClicked.bind(this);
    this.nextButtonClicked = this.nextButtonClicked.bind(this);
  }

  componentDidMount() {
    this.getBackupSets();
  }

//Fetching backup sets data from the API
  getBackupSets() {
    $.ajax({
      url: 'http://localhost:8000/backupsets/3/?page=' + (this.state.pageCount),
      dataType: 'json',
      cache: 'false',
      contentType: 'application/json',
      success: function(data) {
        this.setState({backupsets: data.results}, function() {
          console.log(this.state);
        })
      }.bind(this),
      error: function(xhr, status, err) {
        console.log(err);
      }
    })
  }

  previousButtonClicked() {
    this.setState({
      pageCount: this.state.pageCount - 1
    })
    this.getBackupSets();
  }

  nextButtonClicked() {
    this.setState({
      pageCount: this.state.pageCount + 1
    })
    this.getBackupSets();
  }

  render()  {
    let backupsetsItems = this.state.backupsets.map(backupsets => {
      return(
        <BackupsetsItem key={backupsets.id} backupsets = {backupsets} />
      );
    });
    return(
      <div className="Backupsets">
        <div className="container">
          <div className="row">
             <div>
               <h1 className="title">Backup Sets</h1>
               <table>
                <tr>
                  <th>App Id</th>
                  <th>BOID</th>
                  <th>BSID</th>
                  <th>Backupset Name</th>
                  <th>Status</th>
                  <th>No. of Files</th>
                </tr>
                  {backupsetsItems}
              </table>
              <Pager>
                <Pager.Item onClick= {this.previousButtonClicked}>&larr; Previous</Pager.Item>
                <span> </span>
                <Pager.Item onClick= {this.nextButtonClicked}>Next &rarr;</Pager.Item>
              </Pager>
              { this.state.pageCount }
             </div>  
          </div>
        </div>
      </div>
    );
  }
}

export default Backupsets;
