import React, {Component} from 'react';
import MetadataItem from './MetadataItem';


class Metadata extends Component  {

  render() {
    let metadataItems;
    metadataItems = this.props.metadata.map(metadata => {
      return(
        <MetadataItem key={metadata.id} metadata={metadata} />
      );
    })

    return (
    	<div className="Metadata">
          <div className="container">
            <div className="row">
               <div className="col-md-6 col-md-offset-5">
                   <h1 className="title">Metadata</h1>
                   <table>
                    <tr>
                      <th>ID</th>
                      <th>HDFS CLUSTER</th>
                      <th>BACKUP QUEUE</th>
                      <th>BACKUP SET SIZE</th>
                      <th>NAME NODE</th>
                    </tr>
                      {metadataItems}
                  </table>
               </div>  
            </div>
          </div>
      </div>
    );
  }
}

export default Metadata;
