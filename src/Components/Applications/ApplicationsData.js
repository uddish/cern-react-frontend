import React, {Component} from 'react';
import ApplicationsDataItem from  './ApplicationsDataItem';
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
    let applicationDataItems = this.state.applicationData.map(applicationData =>  {
      return (
        <ApplicationsDataItem key={applicationData.id} applicationData = {applicationData} />
      );
    });
    return(
      <div className="ApplicationsData">
        <div className="container">
          <div className="row">
             <div>
               <h1 className="title">Applications Data</h1>
               <table class="rwd-table">
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
                  {applicationDataItems}
              </table>
             </div>  
          </div>
        </div>
      </div>
    );
  }
}

export default ApplicationsData;
