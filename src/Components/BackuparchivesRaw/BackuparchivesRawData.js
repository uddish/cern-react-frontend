import React, {Component} from 'react';
import BackuparchivesRawDataItem from  './BackuparchivesRawDataItem';
import $ from 'jquery';


class BackuparchivesRawData extends Component {
  constructor() {
    super();
    this.state = {
      backuparchivesRaw: [],
    }
  }

componentDidMount() {
  this.getBackuparchivesRaw();
}

//Fetching backup archives raw data from the API
  getBackuparchivesRaw() {
    $.ajax({
      url: 'http://localhost:8000/backuparchives-raw/3/',
      dataType: 'json',
      cache: 'false',
      contentType: 'application/json',
      success: function(data) {
        this.setState({backuparchivesRaw: data.results}, function() {
          console.log(this.state);
        })
      }.bind(this),
      error: function(xhr, status, err) {
        console.log(err);
      }
    })
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
             </div>  
          </div>
        </div>
      </div>
    );
  }
}

export default BackuparchivesRawData;
