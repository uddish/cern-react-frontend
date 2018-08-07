import React, {Component} from 'react';
import {FormGroup, ControlLabel, FormControl, Button} from 'react-bootstrap';
// import DatePicker from 'react-datepicker';
import moment from 'moment';
// import 'react-datepicker/dist/react-datepicker.css';
import BackupsRecovered from './BackupsRecovered';
import DateTimePicker from 'react-datetime-picker'
import $ from 'jquery';


class RecoverBackupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'Uddish Verma',
      cluster_name: '',
      application_name: '',
      list_of_files: '',
      selected_date: new Date(),
      requested_date: new Date(),
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
    event.preventDefault();

    const data = {
      username: "Uddish Verma",
      cluster_name: this.state.cluster_name,
      application_name: this.state.application_name,
      requested_timestamp: moment(this.state.selected_date).format('YYYY-MM-DD HH:mm:ss'),
      recovery_timestamp: moment(this.state.requested_date).format('YYYY-MM-DD HH:mm:ss'),
      list_of_files: this.state.list_of_files,
    }

    console.log(data);

    $.ajax({
      url: 'https://hadoop-backup-catalog.web.cern.ch/backup-recovery/',
      dataType: 'json',
      type: 'POST',
      data: data,
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error('Error -> ', status, err.toString());
      }.bind(this)
    });

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
          <DateTimePicker
            className="date-picker-input"
            value={this.state.selected_date}
            onChange={this.handleDateChange}
          />
          <br />
          <Button type="submit" className="text-margin-left" bsStyle="primary">Submit</Button>
        </form>
        <br />
        <hr/>
        <br />
        <div className="text-margin-left">
        <BackupsRecovered backupsRecovered={this.state.backupsRecovered}/>
        </div>
      </div>
    );
  }
}

export default RecoverBackupForm;
