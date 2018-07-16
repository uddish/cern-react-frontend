import React, {Component} from 'react';
import BackupoperationsItem from './BackupoperationsItem';



class Backupoperations extends Component  {
  render()  {
    let backupoperationsItems = this.props.backupoperations.map(backupoperations => {
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
