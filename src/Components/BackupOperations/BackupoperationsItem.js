import React, {Component} from 'react';


class BackupoperationsItem extends Component  {
  render()  {
    return (
      <tr>
        <td>{this.props.backupsets.appid}</td>
        <td>{this.props.backupsets.boid}</td>
        <td>{this.props.backupsets.backup_type}</td>
        <td>{this.props.backupsets.last_backup_timestamp}</td>
        <td>{this.props.backupsets.start_time}</td>
        <td>{this.props.backupsets.completion_time}</td>
        <td>{this.props.backupsets.status}</td>
      </tr>
    );
  }
}

export default BackupoperationsItem;
