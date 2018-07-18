import React, {Component} from 'react';
import {PageHeader} from 'react-bootstrap';


class HomeDataItem extends Component {
  render()  {
    return (
      // <tr>
      //   <td>{this.props.homeApplicationData.appid}</td>
      //   <td>{this.props.homeApplicationData.appname}</td>
      //   <td>{this.props.homeApplicationData.hdfs_root_dir}</td>
      //   <td>{this.props.homeApplicationData.hdfs_cluster}</td>
      //   <td>{this.props.homßeApplicationData.appowner}</td>
      //   <td>{this.props.homeApplicationData.appowner_email}</td>
      //   <td>{this.props.homeApplicationData.servicecontact}</td>
      //   <td>{this.props.homeApplicationData.servicecontact_email}</td>
      //   <td>{this.props.homeApplicationData.age}</td>
      // </tr>
      // <div>
      //     <h2>App Name: <h4>{this.props.homeApplicationData.appname}</h4></h2>
      // </div>
      <div>
        <PageHeader>
          App Name :  <small>{this.props.homeApplicationData.appname}</small>
        </PageHeader>
        <PageHeader>
          HDFS Root Directory :  <small>{this.props.homeApplicationData.hdfs_root_dir}</small>
        </PageHeader>
        <PageHeader>
          Cluster :  <small>{this.props.homeApplicationData.hdfs_cluster}</small>
        </PageHeader>
        <PageHeader>
          Owner :  <small>{this.props.homeApplicationData.appowner}</small>
        </PageHeader>
        <PageHeader>
          File Age :  <small>{this.props.homeApplicationData.age}</small>
        </PageHeader>
      </div>
    );
  }
}

export default HomeDataItem;
