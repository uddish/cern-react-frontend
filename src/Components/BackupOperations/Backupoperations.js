import React, {Component} from 'react';
import $ from 'jquery';
import moment from 'moment';
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
      url: 'https://hadoop-backup-catalog.web.cern.ch/backup-operations/' + this.props.username + '/',
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
      sizePerPage: 15,
      prePage: 'Previous',
      nextPage: 'Next',
      firstPage: 'First',
      lastPage: 'Last',
      hideSizePerPage: true,
    };

    function dateFormatter(cell: any) {
    if (!cell) {
          return "";
    }
    return `${moment(cell).format("DD-MM-YYYY")? moment(cell).format("MM-DD-YYYY H:mm:ss"):moment(cell).format("MM-DD-YYYY H:mm:ss") }`;
    }

    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="header">
                <h2 className="text-margin-left-10px">Backup Operations</h2>
                <br />
              </div>
              <div className="content">
                <BootstrapTable data={ this.state.backupoperations } exportCSV={ true }
                  bordered={true}
                  striped
                  pagination={true}
                  options={options}>
                  <TableHeaderColumn
                    dataAlign='center'
                    dataField='appid'
                    isKey
                    width="15%"
                    dataSort>
                    App Id
                  </TableHeaderColumn>
                  <TableHeaderColumn
                    dataAlign='center'
                    dataField='boid'
                    width="20%"
                    dataSort>
                    BOID
                  </TableHeaderColumn>
                  <TableHeaderColumn
                    dataAlign='center'
                    dataField='backup_type'
                    width="25%"
                    filter={ { type: 'TextFilter'} }
                    dataSort>
                    Backup Type
                  </TableHeaderColumn>
                  <TableHeaderColumn
                    dataAlign='center'
                    dataField='last_backup_timestamp'
                    width="30%"
                    filter={ { type: 'TextFilter'} }
                    dataFormat={dateFormatter}
                    dataSort>
                    Last Backup Timestamp
                  </TableHeaderColumn>
                  <TableHeaderColumn
                    dataAlign='center'
                    dataField='start_time'
                    dataFormat={dateFormatter}
                    width="35%">
                    Start Time
                  </TableHeaderColumn>
                  <TableHeaderColumn
                    dataAlign='center'
                    dataField='completion_time'
                    dataFormat={dateFormatter}
                    width="25%">
                    Completion Time
                  </TableHeaderColumn>
                  <TableHeaderColumn
                    dataAlign='center'
                    dataField='status'
                    width="25%">
                    Status
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
