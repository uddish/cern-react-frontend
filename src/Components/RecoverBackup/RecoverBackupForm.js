import React, {Component} from 'react';
import {FormGroup, ControlLabel, FormControl, Button} from 'react-bootstrap';
import moment from 'moment';
import BackupsRecovered from './BackupsRecovered';
import DateTimePicker from 'react-datetime-picker'
import $ from 'jquery';
import Select from 'react-select';
import NotificationSystem from 'react-notification-system';


class RecoverBackupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cluster_name: '',
      application_name: '',
      list_of_files: '',
      selected_date: new Date(),
      requested_date: new Date(),
      applicationData: [],
      selectedOption: null,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleClusterOptionChange = this.handleClusterOptionChange.bind(this);
    this.handleApplicationOptionChange = this.handleApplicationOptionChange.bind(this);
  }

  showNotification(position) {
    this.notificationSystem.addNotification({
      message: 'Backup Recovery Requested',
      level: 'success',
      autoDismiss: 0,
      position,
    });
  }

  getApplicationsData() {
    $.ajax({
      url: 'https://hadoop-backup-catalog.web.cern.ch/applications/' + this.props.username + '/',
      dataType: 'json',
      cache: 'false',
      contentType: 'application/json',
      success: function(data) {
        this.setState({applicationData: data}, function() {
          console.log(this.state);
        })
      }.bind(this),
      error: function(xhr, status, err) {
        console.log(err);
      }
    })
  }

  componentDidMount() {
    this.getApplicationsData();
  }

  handleChange(event)  {
    const target = event.target;

    if(target.name === 'list_of_files')  {
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

  handleClusterOptionChange(cluster_name) {
    this.setState({ cluster_name });
  }

  handleApplicationOptionChange(application_name) {
    this.setState({ application_name });
  }

  handleSubmit(event)  {
    event.preventDefault();

    const data = {
      username: this.props.username,
      cluster_name: this.state.cluster_name.value,
      application_name: this.state.application_name.value,
      requested_timestamp: moment(this.state.selected_date).format('YYYY-MM-DD HH:mm:ss'),
      recovery_timestamp: moment(this.state.requested_date).format('YYYY-MM-DD HH:mm:ss'),
      list_of_files: this.state.list_of_files,
    }

    console.log(data);

    $.ajax({
      url: 'https://hadoop-backup-catalog.web.cern.ch/backup-recovery/' + this.props.username + '/',
      dataType: 'json',
      type: 'POST',
      data: data,
      success: function(data) {
        this.setState({data: data});
        this.showNotification('tc');
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
        <br />
        <form onSubmit={this.handleSubmit}>

          <ControlLabel className="text-margin-left">Cluster Name</ControlLabel>
          <Select className="options-class"
            value={this.state.cluster_name}
            onChange={this.handleClusterOptionChange}
            options={this.state.applicationData.map(option => ({ label: option.hdfs_cluster, value: option.hdfs_cluster }))}
          />

          <ControlLabel className="text-margin-left">Application Name</ControlLabel>
          <Select className="options-class"
            name="application_name"
            value={this.state.application_name}
            onChange={this.handleApplicationOptionChange}
            options={this.state.applicationData.map(option => ({ label: option.appname, value: option.appname }))}
          />

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
        <BackupsRecovered backupsRecovered={this.state.backupsRecovered} username={this.props.username}/>
        </div>
        <NotificationSystem
          ref={ref => this.notificationSystem = ref} />
      </div>
    );
  }
}

export default RecoverBackupForm;
