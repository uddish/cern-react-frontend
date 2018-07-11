import React, {Component} from 'react';


class BackupsetsItem extends Component  {
  render()  {
    return (
      <tr>
        <td>{this.props.backupsets.appid}</td>
        <td>{this.props.backupsets.boid}</td>
        <td>{this.props.backupsets.bsid}</td>
        <td>{this.props.backupsets.backupset_name}</td>
        <td>{this.props.backupsets.status}</td>
        <td>{this.props.backupsets.num_files}</td>
      </tr>
    );
  }
}

export default BackupsetsItem;
