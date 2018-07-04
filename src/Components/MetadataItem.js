import React, {Component} from 'react';

class MetadataItem extends Component  {

  render()  {
    return (
    	<li className = "Project">
    		<strong>{this.props.metadata.id}</strong>
    	</li>
    );
  }
}

export default MetadataItem;
