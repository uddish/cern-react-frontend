import React, {Component} from 'react';
import BackupsRecoveredItem from  './BackupsRecoveredItem';
import $ from 'jquery';


class BackupsRecovered extends Component {
  constructor() {
    super();
    this.state = {
      backupsRecovered: [],
    }
  }

  componentDidMount() {
    this.getRecoveredBackups();
  }
//TODO add appid/username here
  getRecoveredBackups() {
    $.ajax({
      url: 'https://hadoop-backup-catalog.web.cern.ch/backup-recovery/',
      dataType: 'json',
      cache: 'false',
      contentType: 'application/json',
      success: function(data) {
        this.setState({backupsRecovered: data}, function() {
          console.log(this.state);
        })
      }.bind(this),
      error: function(xhr, status, err) {
        console.log(err);
      }
    })
  }

  render()  {
    let backupsRecoveredItems = this.state.backupsRecovered.map(backupsRecovered =>  {
      return (
        <BackupsRecoveredItem key={backupsRecovered.id} backupsRecovered = {backupsRecovered} />
      );
    });
    return(
      <div className="ApplicationsData">
        <div className="container">
          <div className="row">
             <div>
               <table className="rwd-table">
                 <tbody>
                   <tr>
                     <th>Cluster Name</th>
                     <th>Application Name</th>
                     <th>List of Files</th>
                     <th>Recovery Timestamp</th>
                     <th>Requested Timestamp</th>
                     <th>Status</th>
                     <th>Recovery Status</th>
                     <th>Staging Directory</th>
                   </tr>
                   {backupsRecoveredItems}
                 </tbody>
              </table>
             </div>  
          </div>
        </div>
      </div>
    );
  }
}

export default BackupsRecovered;
