import React, {Component} from 'react';
import MetadataItem from './MetadataItem';
import $ from 'jquery';


const Route = ({ path, component }) => {
  const pathname = window.location.pathname;
  if(pathname.match(path))  {
    return (
      React.createElement(component)
    );
  }
  else {
    return null;
  }
};

class Metadata extends Component  {
  constructor() {
    super();
    this.state = {
      metadata: [],
    }
  }

  //Fetching metadata from the API
    getMetadata()  {
      $.ajax({
        url: 'http://localhost:8000/metadata/',
        dataType: 'json',
        cache: false,
        contentType : 'application/json',
        success: function(data) {
          this.setState({metadata: data}, function() {
            console.log(this.state);
          })
        }.bind(this),
        error: function(xhr, status, err)  {
          console.log(err);
        }
      });
    }

    componentDidMount() {
      this.getMetadata();
    }

  render() {
    let metadataItems;
    metadataItems = this.state.metadata.map(metadata => {
      return(
        <MetadataItem key={metadata.id} metadata={metadata} />
      );
    })

    return (
    	<div className="Metadata">
          <div className="container">
            <div className="row">
               <div>
                   <h1 className="title">Metadata</h1>
                   <table>
                    <tr>
                      <th>ID</th>
                      <th>HDFS CLUSTER</th>
                      <th>BACKUP QUEUE</th>
                      <th>BACKUP SET SIZE</th>
                      <th>NAME NODE</th>
                    </tr>
                    <Route path='/metadata' component={metadataItems} />
                  </table>
               </div>  
            </div>
          </div>
      </div>
    );
  }
}

export default Metadata;
