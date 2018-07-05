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
        <h3>Application Data</h3>
        {applicationDataItems}
      </div>
    );
  }
}

export default ApplicationsData;
