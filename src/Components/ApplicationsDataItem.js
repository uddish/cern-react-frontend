import React, {Component} from 'react';

class ApplicationsDataItem extends Component {

  render()  {
    return (
      <ul className = "ApplicationsData" type="none">
      	<li>
      		<strong>{this.props.applicationData.appid}</strong> )
          &nbsp;&nbsp;{this.props.applicationData.appname}
          &nbsp;&nbsp;&nbsp;&nbsp; {this.props.applicationData.hdfs_root_dir}
          &nbsp;&nbsp;&nbsp;&nbsp; {this.props.applicationData.hdfs_cluster}
          &nbsp;&nbsp;&nbsp;&nbsp; {this.props.applicationData.appowner}
          &nbsp;&nbsp;&nbsp;&nbsp; {this.props.applicationData.appowner_email}
          &nbsp;&nbsp;&nbsp;&nbsp; {this.props.applicationData.servicecontact}
          &nbsp;&nbsp;&nbsp;&nbsp; {this.props.applicationData.servicecontact_email}
          &nbsp;&nbsp;&nbsp;&nbsp; {this.props.applicationData.age}
      	</li>
      </ul>
    );
  }
}

export default ApplicationsDataItem;
