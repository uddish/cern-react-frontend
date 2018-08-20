import React, {Component} from 'react';
import $ from 'jquery';
import { BarChart, Area, ResponsiveContainer,  AreaChart, Bar, CartesianGrid,
  XAxis, YAxis, Tooltip, Legend } from 'recharts';

class BackupReports extends Component{
  constructor() {
    super();
    this.state = {
      fileNoData: [],
      fileSizeDate: [],
    }
  }

  componentDidMount() {
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

  render()  {
    return(
      <div className="form-group">
        <h3>Last Backup Timestamp vs Number of Files</h3>
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
    );
  }
}

export default BackupReports;
