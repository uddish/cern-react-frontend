import React, {Component} from 'react';
import ReactTable from 'react-table';
import JsonTable from 'ts-react-json-table';


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
