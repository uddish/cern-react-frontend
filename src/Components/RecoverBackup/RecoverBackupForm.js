import React, {Component} from 'react';
import {FormGroup, ControlLabel, FormControl, Button} from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';


class RecoverBackupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cluster_name: '',
      application_name: '',
      list_of_files: '',
      selected_date: moment()
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);

  }

  handleChange(event)  {
    const target = event.target;

    if(target.name === 'cluster_name')  {
      this.setState({cluster_name: event.target.value})
    }
    else if(target.name === 'application_name')  {
      this.setState({application_name: event.target.value})
    }
    else if(target.name === 'list_of_files')  {
      this.setState({list_of_files: event.target.value})
    }
    else if(target.name === 'start_date') {
      this.setState({start_date: event.target.value})
    }
  }

  handleDateChange(date)  {
    this.setState({
			selected_date: date
		});
  }

  handleSubmit(event)  {
    console.log('CLUSTER NAME -> ' + this.state.cluster_name);
    console.log('APPLICATION NAME -> ' + this.state.application_name);
    console.log('FILES NAME -> ' + this.state.selected_date);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <h2 className="text-margin-left">Request a Backup Recovery</h2>
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="formControlsSelect"
            value={this.state.cluster_name}
            onChange={this.handleChange}>
            <ControlLabel>Cluster Name</ControlLabel>
            <FormControl className="form-text-view"
              componentClass="select" placeholder="select"
              name="cluster_name">
              <option value="option_1">Option 1</option>
              <option value="option_2">Option 2</option>
              <option value="option_3">Option 3</option>
              <option value="option_4">Option 4</option>
            </FormControl>
          </FormGroup>
          <FormGroup controlId="formControlsSelect"
            value={this.state.application_name}
            onChange={this.handleChange}>
            <ControlLabel>Application Name</ControlLabel>
            <FormControl className="form-text-view"
              componentClass="select" placeholder="select"
              name="application_name">
              <option value="option_1">Option 1</option>
              <option value="option_2">Option 2</option>
              <option value="option_3">Option 3</option>
              <option value="option_4">Option 4</option>
            </FormControl>
          </FormGroup>
          <FormGroup className="form-group"
             controlId="formBasicText"
             value={this.state.list_of_files}
             onChange={this.handleChange}>
            <ControlLabel>List of Files</ControlLabel>
            <FormControl className="form-text-view"
              type="text" name="list_of_files"/>
          </FormGroup>
          <h5 className="text-margin-left">Recovery Date and Time</h5>
          <DatePicker
            className="date-picker-input"
            selected={this.state.selected_date}
            onChange={this.handleDateChange}
            showTimeSelect
            dateFormat="LLL"
          />
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
