import React, {Component} from 'react';
import BackupsetsItem from './BackupsetsItem';



class Backupsets extends Component  {
  render()  {
    let backupsetsItems = this.props.backupsets.map(backupsets => {
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
             </div>  
          </div>
        </div>
      </div>
    );
  }
}

export default Backupsets;
