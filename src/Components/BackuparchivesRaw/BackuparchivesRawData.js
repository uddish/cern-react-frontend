import React, {Component} from 'react';
import BackuparchivesRawDataItem from  './BackuparchivesRawDataItem';
import $ from 'jquery';
import {Pager} from 'react-bootstrap';


class BackuparchivesRawData extends Component {
  constructor() {
    super();
    this.state = {
      backuparchivesRaw: [],
      pageCount: 1,
      totalPageCount: 0,
    }
    this.previousButtonClicked = this.previousButtonClicked.bind(this);
    this.nextButtonClicked = this.nextButtonClicked.bind(this);
  }

componentDidMount() {
  this.getBackuparchivesRaw();
}

//Fetching backup archives raw data from the API
  getBackuparchivesRaw() {
    $.ajax({
      url: 'https://hadoop-backup-catalog.web.cern.ch/backuparchives-raw/3/?page='+ (this.state.pageCount),
      dataType: 'json',
      cache: 'false',
      contentType: 'application/json',
      success: function(data) {
        this.setState({
          backuparchivesRaw: data.results,
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
        totalPageCount: (this.state.totalPageCount/10) + 1
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
        this.getBackuparchivesRaw()
      }
    )}
  }

  nextButtonClicked() {
    if(this.state.pageCount < this.state.totalPageCount)  {
      this.setState({
        pageCount: this.state.pageCount + 1
      }, function() {
        console.log('Increasing page count ' + this.state.pageCount)
        this.getBackuparchivesRaw()
      }
    )}
  }

  render()  {
    let backuparchivesRawDataItem;
    backuparchivesRawDataItem = this.state.backuparchivesRaw.map(backuparchivesRaw =>  {
      return (
        <BackuparchivesRawDataItem key={backuparchivesRaw.id} backuparchivesRaw = {backuparchivesRaw} />
      );
    });
    return(
      <div className="BackuparchivesRawData">
        <div className="container">
          <div className="row">
             <div>
               <h1 className="title">Backup Archives Raw Data</h1>
               <table class="rwd-table">
                <tr>
                  <th>App Id</th>
                  <th>BOID</th>
                  <th>BSID</th>
                  <th>File Name</th>
                  <th>File Size</th>
                  <th>Status</th>
                </tr>
                  {backuparchivesRawDataItem}
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

export default BackuparchivesRawData;
