import React, {Component} from 'react';


class MetadataItem extends Component  {

  render()  {
      //change the title and location key based on your API
      return (
        <tr>
          <td>{this.props.metadata.id}</td>
          <td>{this.props.metadata.hdfs_cluster}</td>
          <td>{this.props.metadata.backupqueue}</td>
          <td>{this.props.metadata.backupsetsize}</td>
          <td>{this.props.metadata.namenode}</td>
      </tr>
    );
  }
}

export default MetadataItem;
