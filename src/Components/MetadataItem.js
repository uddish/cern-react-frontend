import React, {Component} from 'react';
import ReactTable from 'react-table';


class MetadataItem extends Component  {

  render()  {
    return (
      <ul className = "Metadata" type="none">
      	<li>
      		<strong>{this.props.metadata.id}</strong>
          &nbsp;&nbsp;{this.props.metadata.hdfs_cluster}
          &nbsp;&nbsp;&nbsp;&nbsp; {this.props.metadata.backupqueue}
          &nbsp;&nbsp;&nbsp;&nbsp; {this.props.metadata.backupsetsize}
          &nbsp;&nbsp;&nbsp;&nbsp; {this.props.metadata.namenode}
      	</li>
      </ul>
    );
  }
}
export default MetadataItem;
