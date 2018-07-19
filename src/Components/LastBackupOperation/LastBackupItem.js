import React, {Component} from 'react';


class LastBackupItem extends Component  {
  render()  {
    return (
      <div>
        <h1 className="title">BACKUP SUMMARY</h1>
        <hr/>
          <div className="container-fluid">
            <div className="row">
              <div className="col-xs-4">
                <h3>Backup Type</h3>
                <h4 class="home-application-data">{this.props.lastBackup.backup_type}</h4>
              </div>
              <div className="col-xs-4">
                <h3>Last Backup Timestamp</h3>
                <h4 class="home-application-data">{this.props.lastBackup.last_backup_timestamp}</h4>
              </div>
              <div className="col-xs-4">
                <h3>Start Time</h3>
                <h4 class="home-application-data">{this.props.lastBackup.start_time}</h4>
              </div>
            </div>

            <br />

            <div className="row">
              <div className="col-xs-4">
                <h3>Completion Time</h3>
                <h4 class="home-application-data">{this.props.lastBackup.completion_time}</h4>
              </div>
              <div className="col-xs-8">
                <h3>Status</h3>
                <h4 class="text-color-green">{this.props.lastBackup.status}</h4>
              </div>
            </div>
            <br />

        </div>
      </div>
    );
  }
}

export default LastBackupItem;
