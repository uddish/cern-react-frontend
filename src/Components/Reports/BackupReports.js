import React, {Component} from 'react';
import $ from 'jquery';
import { BarChart, Area, ResponsiveContainer,  AreaChart, Bar, CartesianGrid,
  XAxis, YAxis, Tooltip, Legend, PieChart, Pie, ComposedChart, Treemap, Label } from 'recharts';

class BackupReports extends Component{
  constructor() {
    super();
    this.state = {
      fileNoData: [],
      fileSizeDate: [],
      adminOperations: [],
      adminNoOfFiles: [],
    }
  }

  componentDidMount() {
    if(this.props.isAdmin === true) {
      this.getAdminReportsOperations();
    }
    this.getBackupReportsNoOfFiles();
    this.getBackupReportsFileSize();
  }

  getBackupReportsNoOfFiles() {
    $.ajax({
      url: 'https://hadoop-backup-catalog.web.cern.ch/backup-reports/' + (this.props.username) + '/',
      dataType: 'json',
      cache: 'false',
      contentType: 'application/json',
      success: function(data) {
        this.setState({fileNoData: data}, function() {
          console.log(this.state);
        })
      }.bind(this),
      error: function(xhr, status, err) {
        console.log(err);
      }
    })
  }

  getBackupReportsFileSize() {
    $.ajax({
      url: 'https://hadoop-backup-catalog.web.cern.ch/backup-reports-volume/' + (this.props.username) + '/',
      dataType: 'json',
      cache: 'false',
      contentType: 'application/json',
      success: function(data) {
        this.setState({fileSizeDate: data}, function() {
          console.log(this.state);
        })
      }.bind(this),
      error: function(xhr, status, err) {
        console.log(err);
      }
    })
  }

  getAdminReportsOperations() {
    $.ajax({
      url: 'http://127.0.0.1:8000/admin-reports-operations',
      dataType: 'json',
      cache: 'false',
      contentType: 'application/json',
      success: function(data) {
        this.setState({adminOperations: data}, function() {
          console.log(this.state);
        })
      }.bind(this),
      error: function(xhr, status, err) {
        console.log(err);
      }
    })
  }


  render()  {
    return(
      <div className="form-group">
        {(() => {
          if (this.props.isAdmin === true) {
            return (
              <div>
                <h3>No. Of Files vs Application Name</h3>
                <hr></hr>
                <br />
                <ResponsiveContainer width="100%" height={350}>
                  <BarChart data={this.state.adminOperations}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="appname">
                      <Label value="Application Name" offset={0} position="insideBottom" />
                    </XAxis>
                    <YAxis dataKey="num_files" />
                    <Tooltip />
                    <Bar dataKey="appid" fill="#8884d8" />
                    <Bar dataKey="num_files" fill="#203470" />
                    <Bar dataKey="last_backup_timestamp" fill="#203470" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            );
          }
        })()}
        <div>
          <h3>Last Backup Timestamp vs Number of Files</h3>
          <h5>Last 30 Days</h5>
          <hr></hr>
          <br />
          <ResponsiveContainer width="100%" height={350}>
          <BarChart data={this.state.fileNoData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey=""/>
            <YAxis dataKey="num_files" />
            <Tooltip />
            <Legend />
            <Bar dataKey="last_backup_timestamp" fill="#8884d8" />
            <Bar dataKey="num_files" fill="#203470" />
          </BarChart>
        </ResponsiveContainer>

        <br />
        <h3>Last Backup Timestamp vs File Size</h3>
        <h5>Last 30 Days</h5>
        <hr></hr>
        <br />
        <ResponsiveContainer width="100%" height={350}>
          <AreaChart data={this.state.fileSizeDate}
            margin={{ top: 10, right: 30, left: 20, bottom: 10 }}>
            <defs>
              <linearGradient id="color_num_files" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#203470" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#203470" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Area type="monotone" dataKey="last_backup_timestamp" stroke="#8884d8" fillOpacity={1} fill="url(#color_num_files)" />
            <Area type="monotone" dataKey="file_size" stroke="#203470" fillOpacity={1} fill="url(#color_num_files)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
    );
  }
}

export default BackupReports;
