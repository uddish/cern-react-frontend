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
        <h3>Metadata</h3>
        {metadataItems}
      </div>
    );
  }
}

export default Metadata;
