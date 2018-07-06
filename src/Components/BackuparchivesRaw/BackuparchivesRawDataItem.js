import React, {Component} from 'react';

class BackuparchivesRawDataItem extends Component {
  render()  {
    return (
      //TODO Add handle_raw later and last_Seen
      <tr>
        <td>{this.props.backuparchivesRaw.appid}</td>
        <td>{this.props.backuparchivesRaw.boid}</td>
        <td>{this.props.backuparchivesRaw.bsid}</td>
        <td>{this.props.backuparchivesRaw.file_name}</td>
        <td>{this.props.backuparchivesRaw.file_size}</td>
        <td>{this.props.backuparchivesRaw.status}</td>
      </tr>
    );
  }
}

export default BackuparchivesRawDataItem;
