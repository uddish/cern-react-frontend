import React, {Component} from 'react';
import BackupoperationsItem from './BackupoperationsItem';
import $ from 'jquery';


class Backupoperations extends Component  {
  constructor() {
    super();
    this.state = {
      backupoperations: [],
    }
  }

  componentDidMount() {
    this.getBackupOperations();
  }

  //Fetching backup operations from the API
  getBackupOperations() {
    $.ajax({
      url: 'http://localhost:8000/backup-operations/3/',
      dataType: 'json',
      cache: 'false',
      contentType: 'application/json',
      success: function(data) {
        this.setState({backupoperations: data.results}, function() {
          console.log(this.state);
        })
      }.bind(this),
      error: function(xhr, status, err) {
        console.log(err);
      }
    })
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
                <tr>
                  <th>App Id</th>
                  <th>BOID</th>
                  <th>Backup Type</th>
                  <th>Last Backup</th>
                  <th>Start Time </th>
                  <th>Completion Time</th>
                  <th>Status Time</th>
                </tr>
                  {backupoperationsItems}
              </table>
             </div>  
          </div>
        </div>
      </div>
    );
  }
}

export default Backupoperations;
