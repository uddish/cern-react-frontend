import React, {Component} from 'react';
import $ from 'jquery';
import { BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';


class BackupsRecovered extends Component {
  constructor() {
    super();
    this.state = {
      backupsRecovered: [],
    }
  }

  componentDidMount() {
    this.getRecoveredBackups();
  }
//TODO add appid/username here
  getRecoveredBackups() {
    $.ajax({
      url: 'https://hadoop-backup-catalog.web.cern.ch/backup-recovery/',
      dataType: 'json',
      cache: 'false',
      contentType: 'application/json',
      success: function(data) {
        this.setState({backupsRecovered: data}, function() {
          console.log(this.state);
        })
      }.bind(this),
      error: function(xhr, status, err) {
        console.log(err);
      }
    })
  }

  render()  {
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
                <h2 className="text-margin-left-10px">Backup Sets</h2>
                <br />
              </div>
              <div className="content">
                <BootstrapTable data={ this.state.backupsRecovered } exportCSV={ true }
                  data={this.state.backupsRecovered}
                  bordered={true}
                  striped
                  pagination={true}
                  options={options}>
                  <TableHeaderColumn
                    dataAlign='center'
                    dataField='cluster_name'
                    isKey
                    width="20%"
                    dataSort>
                    Cluster Name
                  </TableHeaderColumn>
                  <TableHeaderColumn
                    dataAlign='center'
                    dataField='application_name'
                    width="20%"
                    filter={ { type: 'TextFilter'} }
                    dataSort>
                    Application Name
                  </TableHeaderColumn>
                  <TableHeaderColumn
                    dataAlign='center'
                    dataField='list_of_files'
                    width="15%"
                    dataSort>
                    List of Files
                  </TableHeaderColumn>
                  <TableHeaderColumn
                    dataAlign='center'
                    dataField='recovery_timestamp'
                    width="30%"
                    dataSort>
                    Recovery Timestamp
                  </TableHeaderColumn>
                  <TableHeaderColumn
                    dataAlign='center'
                    dataField='requested_timestamp'
                    width="25%">
                    Requested Timestamp
                  </TableHeaderColumn>
                  <TableHeaderColumn
                    dataAlign='center'
                    dataField='status'
                    width="15%">
                    Status
                  </TableHeaderColumn>
                  <TableHeaderColumn
                    dataAlign='center'
                    dataField='status'
                    width="15%">
                    Recovery Status
                  </TableHeaderColumn>
                  <TableHeaderColumn
                    dataAlign='center'
                    dataField='staging_directory'
                    width="20%">
                    Staging Directory
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

export default BackupsRecovered;
