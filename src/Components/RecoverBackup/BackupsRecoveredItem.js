import React, {Component} from 'react';

class BackupsRecoveredItem extends Component {
  render()  {
    return (
      <tr>
        <td>{this.props.backupsRecovered.cluster_name}</td>
        <td>{this.props.backupsRecovered.application_name}</td>
        <td>{this.props.backupsRecovered.list_of_files}</td>
        <td>{this.props.backupsRecovered.recovery_timestamp}</td>
        <td>{this.props.backupsRecovered.requested_timestamp}</td>
        <td>{this.props.backupsRecovered.status}</td>
        <td>{this.props.backupsRecovered.recovery_state}</td>
        <td>{this.props.backupsRecovered.staging_directory}</td>
      </tr>
    );
  }
}

export default BackupsRecoveredItem;
