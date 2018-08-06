import React, {Component} from 'react';


class LastBackupItem extends Component  {
  constructor() {
    super();
    this.state = {
      lastBackupTimestamp: "",
      startTime: "",
      completionTime: ""
    }

  }

  //The original time format is in the format (2018-07-04T19:59:02Z)
  //We are taking the substring parts from it and storing it in the new
  //variable states
  convertDateTimeFields() {
    this.setState({
      lastBackupTimestamp: this.props.lastBackup.last_backup_timestamp.substring(0,10)
       + " ("
       + this.props.lastBackup.last_backup_timestamp.substring(11,19)
       + ")"
       ,
       startTime: this.props.lastBackup.start_time.substring(0,10)
        + " ("
        + this.props.lastBackup.start_time.substring(11,19)
        + ")"
        ,
        completionTime: this.props.lastBackup.completion_time.substring(0,10)
         + " ("
         + this.props.lastBackup.completion_time.substring(11,19)
         + ")"
    })
  }

  componentDidMount() {
    this.convertDateTimeFields();
  }


  render()  {
    return (
      <div>
        <h1 className="title">BACKUP SUMMARY</h1>
        <hr/>
          <div className="container-fluid">
            <div className="row">
              <div className="col-xs-4">
                <h3>Backup Type</h3>
                <h4 className="home-application-data">{this.props.lastBackup.backup_type}</h4>
              </div>
              <div className="col-xs-4">
                <h3>Last Backup Timestamp</h3>
                <h4 className="home-application-data">{this.state.lastBackupTimestamp}</h4>
              </div>
              <div className="col-xs-4">
                <h3>Start Time</h3>
                <h4 className="home-application-data">{this.state.startTime}</h4>
              </div>
            </div>

            <br />

            <div className="row">
              <div className="col-xs-4">
                <h3>Completion Time</h3>
                <h4 className="home-application-data">{this.state.completionTime}</h4>
              </div>
              <div className="col-xs-8">
                <h3>Status</h3>
                <h4 className="text-color-green">{this.props.lastBackup.status}</h4>
              </div>
            </div>
            <br />

        </div>
      </div>
    );
  }
}

export default LastBackupItem;
