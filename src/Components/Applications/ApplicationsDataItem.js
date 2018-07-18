import React, {Component} from 'react';

class ApplicationsDataItem extends Component {
  constructor() {
    super();
    this.state = {
      applicationData: [],
    }
  }

  componentDidUpdate()  {
    this.setState({
      applicationData: this.props.applicationData
    })
  }

  render()  {
    return (
      <tr>
        <td>{this.props.applicationData.appid}</td>
        <td>{this.props.applicationData.appname}</td>
        <td>{this.props.applicationData.hdfs_root_dir}</td>
        <td>{this.props.applicationData.hdfs_cluster}</td>
        <td>{this.props.applicationData.appowner}</td>
        <td>{this.props.applicationData.appowner_email}</td>
        <td>{this.props.applicationData.servicecontact}</td>
        <td>{this.props.applicationData.servicecontact_email}</td>
        <td>{this.props.applicationData.age}</td>
      </tr>
    );
  }
}

export default ApplicationsDataItem;
