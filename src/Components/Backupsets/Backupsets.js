import React, {Component} from 'react';
import BackupsetsItem from './BackupsetsItem';
import $ from 'jquery';


class Backupsets extends Component  {
  constructor() {
    super();
    this.state = {
      backupsets: [],
    }
  }

  componentDidMount() {
    this.getBackupSets();
  }

//Fetching backup sets data from the API
  getBackupSets() {
    $.ajax({
      url: 'http://localhost:8000/backupsets/3/',
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
             </div>  
          </div>
        </div>
      </div>
    );
  }
}

export default Backupsets;
