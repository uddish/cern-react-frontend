import React, {Component} from 'react';
import BackupsetsItem from './BackupsetsItem';
import $ from 'jquery';
import {ButtonToolbar, Button} from 'react-bootstrap';


class Backupsets extends Component  {
  constructor() {
    super();
    this.state = {
      backupsets: [],
      pageCount: 1,
      totalPageCount: 0
    }
    this.previousButtonClicked = this.previousButtonClicked.bind(this);
    this.nextButtonClicked = this.nextButtonClicked.bind(this);
  }

  componentDidMount() {
    this.getBackupSets();
  }

//Fetching backup sets data from the API
  getBackupSets() {
    $.ajax({
      url: 'http://localhost:8000/backupsets/3/?page=' + (this.state.pageCount),
      dataType: 'json',
      cache: 'false',
      contentType: 'application/json',
      success: function(data) {
        this.setState({
          backupsets: data.results,
          totalPageCount: parseInt(data.count/10)+1,
        }, function() {
          console.log(this.state);
        })
      }.bind(this),
      error: function(xhr, status, err) {
        console.log(err);
      }
    })
  }

  previousButtonClicked() {
    if(this.state.pageCount > 1)  {
      this.setState({
        pageCount: this.state.pageCount - 1
      }, function() {
        console.log('Decreasing page count ' + this.state.pageCount)
        this.getBackupSets()
      }
    )}
  }

  nextButtonClicked() {
    if(this.state.pageCount < this.state.totalPageCount)  {
      this.setState({
        pageCount: this.state.pageCount + 1
      }, function() {
        console.log('Increasing page count ' + this.state.pageCount)
        this.getBackupSets()
      }
    )}
  }

  render()  {
    let backupsetsItems = this.state.backupsets.map(backupsets => {
      return(
        <BackupsetsItem key={backupsets.id} backupsets = {backupsets} />
      );
    });
    return(
      <div className="Backupsets">
        <div className="container">
          <div className="row">
             <div>
               <h1 className="title">Backup Sets</h1>
               <table>
                 <tbody>
                  <tr>
                    <th>App Id</th>
                    <th>BOID</th>
                    <th>BSID</th>
                    <th>Backupset Name</th>
                    <th>Status</th>
                    <th>No. of Files</th>
                  </tr>
                </tbody>
                  {backupsetsItems}
              </table>
              <ButtonToolbar>
                <Button bsStyle="primary" bsSize="small" onClick= {this.previousButtonClicked}>&larr; Previous</Button>
                <Button bsStyle="primary" bsSize="small" onClick= {this.nextButtonClicked}>Next &rarr;</Button>
              </ButtonToolbar>
              <h6>Page {this.state.pageCount} of {this.state.totalPageCount}</h6>
             </div>  
          </div>
        </div>
      </div>
    );
  }
}

export default Backupsets;
