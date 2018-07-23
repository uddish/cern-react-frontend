import React, {Component} from 'react';
import {FormGroup, ControlLabel, FormControl, Button} from 'react-bootstrap';

class RecoverBackupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cluster_name: '',
      application_name: '',
      list_of_files: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(event)  {
    this.setState({cluster_name: event.target.value});
  }

  handleSubmit(event)  {
    console.log('CLUSTER NAME VALUE -> : ' + this.state.cluster_name);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <h2 className="text-margin-left">Request a Backup Recovery</h2>
        <form onSubmit={this.handleSubmit}>
          <FormGroup className="form-group"
             controlId="formBasicText"
             value={this.state.cluster_name}
             onChange={this.handleChange}>
            <ControlLabel>Cluster Name</ControlLabel>
            <FormControl className="form-text-view"
              type="text"/>
          </FormGroup>

          <FormGroup controlId="formControlsSelect">
            <ControlLabel>Application Name</ControlLabel>
            <FormControl className="form-text-view"
              componentClass="select" placeholder="select">
              <option value="option_1">Option 1</option>
              <option value="option_2">Option 2</option>
              <option value="option_3">Option 3</option>
              <option value="option_4">Option 4</option>
            </FormControl>
          </FormGroup>

          <FormGroup controlId="formControlsSelect">
            <ControlLabel>List of Files</ControlLabel>
            <FormControl className="form-text-view"
              componentClass="select" placeholder="select">
              <option value="option_1">Option 1</option>
              <option value="option_2">Option 2</option>
              <option value="option_3">Option 3</option>
              <option value="option_4">Option 4</option>
            </FormControl>
          </FormGroup>
          <Button type="submit" className="text-margin-left" bsStyle="primary">Submit</Button>
        </form>
        <br />
        <hr/>
        <br />
        <div className="text-margin-left">
        <h2>Backups Recovered</h2>
        <h3>File 1</h3>
        <h4>Destination: <a>abc/xyz/abc</a></h4>
        <h3>File 2</h3>
        <h4>Destination: <a>abc/xyz/abc</a></h4>
        <h3>File 3</h3>
        <h4>Destination: <a>abc/xyz/abc</a></h4>
        </div>
      </div>
    );
  }
}

export default RecoverBackupForm;
