import React, {Component} from 'react';
import $ from 'jquery';
import { BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';


class Backupsets extends Component  {
  constructor() {
    super();
    this.state = {
      backupsets: [],
    }
  }

  componentDidMount() {
    this.getBackupSets();
  }

//Fetching backup sets data from the API
  getBackupSets() {
    $.ajax({
      url: 'https://hadoop-backup-catalog.web.cern.ch/backupsets/3/',
      dataType: 'json',
      cache: 'false',
      contentType: 'application/json',
      success: function(data) {
        this.setState({
          backupsets: data,
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
                <br />
              </div>
              <div className="content">
                <BootstrapTable data={ this.state.backupsets } exportCSV={ true }
                  data={this.state.backupsets}
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
                    filter={ { type: 'TextFilter'} }
                    dataSort>
                    BOID
                  </TableHeaderColumn>
                  <TableHeaderColumn
                    dataAlign='center'
                    dataField='bsid'
                    width="15%"
                    dataSort>
                    BSID
                  </TableHeaderColumn>
                  <TableHeaderColumn
                    dataAlign='center'
                    dataField='backupset_name'
                    width="40%"
                    dataSort>
                    Backupset Name
                  </TableHeaderColumn>
                  <TableHeaderColumn
                    dataAlign='center'
                    dataField='status'
                    width="25%">
                    Status
                  </TableHeaderColumn>
                  <TableHeaderColumn
                    dataAlign='center'
                    dataField='num_files'
                    width="20%">
                    No. of Files
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

export default Backupsets;
