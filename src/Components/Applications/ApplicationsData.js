import React, {Component} from 'react';
import $ from 'jquery';


class ApplicationsData extends Component {
  constructor() {
    super();
    this.state = {
      applicationData: [],
    }
  }

  componentDidMount() {
    this.getApplicationsData();
  }

  getApplicationsData() {
    $.ajax({
      url: 'https://hadoop-backup-catalog.web.cern.ch/applications/3/',
      dataType: 'json',
      cache: 'false',
      contentType: 'application/json',
      success: function(data) {
        this.setState({applicationData: data}, function() {
          console.log(this.state);
        })
      }.bind(this),
      error: function(xhr, status, err) {
        console.log(err);
      }
    })
  }

  render()  {
    return(
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="card card-plain">
              <div className="header">
                <h2 className="title margin-30px">Applications Data</h2>
              </div>
              <div className="content table-responsive table-full-width margin-30px">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th>App Id</th>
                      <th>App Name</th>
                      <th>HDFS Root Dir</th>
                      <th>HDFS Cluster</th>
                      <th>App Owner</th>
                      <th>App Owner Email</th>
                      <th>Service Contact</th>
                      <th>Service Contact Email</th>
                      <th>Age</th>

                    </tr>
                  </thead>
                  <tbody>
                  {this.state.applicationData.map(applicationData => (
                    <tr key={applicationData.appid}>
                      <td>{applicationData.appid}</td>
                      <td>{applicationData.appname}</td>
                      <td>{applicationData.hdfs_root_dir}</td>
                      <td>{applicationData.hdfs_cluster}</td>
                      <td>{applicationData.appowner}</td>
                      <td>{applicationData.appowner_email}</td>
                      <td>{applicationData.servicecontact}</td>
                      <td>{applicationData.servicecontact_email}</td>
                      <td>{applicationData.age}</td>
                    </tr>
                  ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ApplicationsData;
