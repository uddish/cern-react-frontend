import React, {Component} from 'react';
import ApplicationsDataItem from  './ApplicationsDataItem';


class ApplicationsData extends Component {
  render()  {
    let applicationDataItems;
    applicationDataItems = this.props.applicationData.map(applicationData =>  {
      return (
        <ApplicationsDataItem key={applicationData.id} applicationData = {applicationData} />
      );
    });
    return(
      <div className="ApplicationsData">
        <div className="container">
          <div className="row">
             <div className="col-md-6 col-md-offset-5">
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
