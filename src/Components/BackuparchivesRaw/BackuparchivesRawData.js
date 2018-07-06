import React, {Component} from 'react';
import BackuparchivesRawDataItem from  './BackuparchivesRawDataItem';


class BackuparchivesRawData extends Component {
  render()  {
    let backuparchivesRawDataItem;
    backuparchivesRawDataItem = this.props.backuparchivesRaw.map(backuparchivesRaw =>  {
      return (
        <BackuparchivesRawDataItem key={backuparchivesRaw.id} backuparchivesRaw = {backuparchivesRaw} />
      );
    });
    return(
      <div className="BackuparchivesRawData">
        <div className="container">
          <div className="row">
             <div className="col-md-6 col-md-offset-5">
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
