import React, {Component} from 'react';
import BackupoperationsItem from './BackupoperationsItem';
import $ from 'jquery';
import {Pager} from 'react-bootstrap';


class Backupoperations extends Component  {
  constructor() {
    super();
    this.state = {
      backupoperations: [],
      pageCount: 1,
      totalPageCount: 0,
    }
    this.previousButtonClicked = this.previousButtonClicked.bind(this);
    this.nextButtonClicked = this.nextButtonClicked.bind(this);
  }

  componentDidMount() {
    this.getBackupOperations();
  }

  //Fetching backup operations from the API
  getBackupOperations() {
    $.ajax({
      url: 'https://hadoop-backup-catalog.web.cern.ch/backup-operations/3/?page=' + (this.state.pageCount),
      dataType: 'json',
      cache: 'false',
      contentType: 'application/json',
      success: function(data) {
        this.setState({
          backupoperations: data.results,
          totalPageCount: data.count,
          }, function() {
          this.calculateTotalPageCount()
          console.log(this.state);
        })
      }.bind(this),
      error: function(xhr, status, err) {
        console.log(err);
      }
    })
  }

  calculateTotalPageCount() {
    //If the value is a float, add 1 to it
    if(this.state.totalPageCount % 10 !== 0) {
      this.setState({
        totalPageCount: parseInt(this.state.totalPageCount/10) + 1
      })
    }
    else {
      this.setState({
        totalPageCount: (this.state.totalPageCount/10)
      })
    }
  }

  previousButtonClicked() {
    if(this.state.pageCount > 1)  {
      this.setState({
        pageCount: this.state.pageCount - 1
      }, function() {
        console.log('Decreasing page count ' + this.state.pageCount)
        this.getBackupOperations()
      }
    )}
  }

  nextButtonClicked() {
    if(this.state.pageCount < this.state.totalPageCount)  {
      this.setState({
        pageCount: this.state.pageCount + 1
      }, function() {
        console.log('Increasing page count ' + this.state.pageCount)
        this.getBackupOperations()
      }
    )}
  }

  render()  {
    let backupoperationsItems = this.state.backupoperations.map(backupoperations => {
      return(
        <BackupoperationsItem key={backupoperations.id} backupsets = {backupoperations} />
      );
    });
    return(
      <div className="Backupoperations">
        <div className="container">
          <div className="row">
             <div>
               <h1 className="title">Backup Operations</h1>
               <table>
                 <tbody>
                  <tr>
                    <th>App Id</th>
                    <th>BOID</th>
                    <th>Backup Type</th>
                    <th>Last Backup</th>
                    <th>Start Time </th>
                    <th>Completion Time</th>
                    <th>Status Time</th>
                  </tr>
                </tbody>
                  {backupoperationsItems}
              </table>
              <div id="pagination-container">
                <div id="page-no-text">
                  <h6>Page {this.state.pageCount} of {this.state.totalPageCount}</h6>
                </div>
              <div id="pagination-btn">
                <Pager>
                  <Pager.Item onClick= {this.previousButtonClicked}>
                    &larr; Previous
                  </Pager.Item>{' '}
                  <Pager.Item onClick= {this.nextButtonClicked}>
                    Next &rarr;
                  </Pager.Item>
                </Pager>
              </div>
             </div>
           </div> 
          </div>
        </div>
      </div>
    );
  }
}

export default Backupoperations;
