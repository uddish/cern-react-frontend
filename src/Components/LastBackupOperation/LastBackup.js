import React, {Component} from 'react';
import LastBackupItem from  './LastBackupItem';
import $ from 'jquery';


class LastBackup extends Component {
  constructor() {
    super();
    this.state = {
      lastBackup: [],
    }
  }

  componentDidMount() {
    this.getLastbackup();
  }

  getLastbackup() {
    $.ajax({
      url: 'http://localhost:8000/backup-operations/3/latest_backup/',
      dataType: 'json',
      cache: 'false',
      contentType: 'application/json',
      success: function(data) {
        this.setState({lastBackup: data}, function() {
          console.log(this.state);
        })
      }.bind(this),
      error: function(xhr, status, err) {
        console.log(err);
      }
    })
  }

  render()  {
    let lastBackupItems = this.state.lastBackup.map(lastBackup =>  {
      return (
        <LastBackupItem key={lastBackup.id} lastBackup = {lastBackup} />
      );
    });
    return(
      <div className="LastBackup">
        <div className="container">
          <div className="row">
             <div>
                {lastBackupItems}
             </div>  
          </div>
        </div>
      </div>
    );
  }
}

export default LastBackup;
