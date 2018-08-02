import React, {Component} from 'react';
import $ from 'jquery';
import { BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';


class Backupoperations extends Component  {
  constructor() {
    super();
    this.state = {
      backupoperations: [],
    }
  }

  componentDidMount() {
    this.getBackupOperations();
  }

  //Fetching backup operations from the API
  getBackupOperations() {
    $.ajax({
      url: 'https://hadoop-backup-catalog.web.cern.ch/backup-operations/3/',
      dataType: 'json',
      cache: 'false',
      contentType: 'application/json',
      success: function(data) {
        this.setState({
          backupoperations: data,
          }, function() {
          console.log(this.state);
        })
      }.bind(this),
      error: function(xhr, status, err) {
        console.log(err);
      }
    })
  }

  render() {
    const options = {
      sizePerPage: 10,
      prePage: 'Previous',
      nextPage: 'Next',
      firstPage: 'First',
      lastPage: 'Last',
      hideSizePerPage: true,
    };

    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="header">
                <h2 className="text-margin-left-10px">Backup Operations</h2>
                <hr></hr>
                <br />
              </div>
              <div className="content">
                <BootstrapTable
                  data={this.state.backupoperations}
                  bordered={false}
                  striped
                  pagination={true}
                  options={options}>
                  <TableHeaderColumn
                    dataField='appid'
                    isKey
                    width="15%"
                    dataSort>
                    App Id
                  </TableHeaderColumn>
                  <TableHeaderColumn
                    dataField='boid'
                    width="20%"
                    filter={ { type: 'TextFilter'} }
                    dataSort>
                    BOID
                  </TableHeaderColumn>
                  <TableHeaderColumn
                    dataField='backup_type'
                    width="25%"
                    dataSort>
                    Backup Type
                  </TableHeaderColumn>
                  <TableHeaderColumn
                    dataField='last_backup_timestamp'
                    width="30%"
                    dataSort>
                    Last Backup Timestamp
                  </TableHeaderColumn>
                  <TableHeaderColumn
                    dataField='start_time'
                    width="35%">
                    Start Time
                  </TableHeaderColumn>
                  <TableHeaderColumn
                    dataField='completion_time'
                    width="25%">
                    Completion Time
                  </TableHeaderColumn>
                  <TableHeaderColumn
                    dataField='status'
                    width="25%">
                    status
                  </TableHeaderColumn>
                </BootstrapTable>
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default Backupoperations;
