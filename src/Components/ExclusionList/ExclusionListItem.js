import React, {Component} from 'react';

class ExclusionListItem extends Component {
  constructor() {
    super();
    this.state = {
      exclusionListName: "",
    }
  }

  componentDidMount() {
    this.populateExclusionList();
  }

  populateExclusionList() {
    this.setState({exclusionListName: this.props.exclusionList.excl_list})
  }

  render()  {
    return(
      <div>
        <h4>{this.props.exclusionList.excl_list}</h4>
      </div>
    );
  }
}

export default ExclusionListItem;
