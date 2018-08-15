import React, { Component } from 'react';
import ApplicationsData from './Components/Applications/ApplicationsData';
import HomeData from './Components/Home/HomeData';
import Backupsets from './Components/Backupsets/Backupsets';
import Backupoperations from './Components/BackupOperations/Backupoperations';
import BackuparchivesRawData from './Components/BackuparchivesRaw/BackuparchivesRawData';
import RecoverBackupForm from './Components/RecoverBackup/RecoverBackupForm';
import BackupReports from './Components/Reports/BackupReports';
import './App.css';
import { Navbar,NavItem,Nav, NavDropdown, MenuItem } from 'react-bootstrap';
import $ from 'jquery';

//To match router path
const Route = ({ path, component }) => {
  const pathname = window.location.pathname;
  if(pathname.match(path))  {
    return (
      React.createElement(component)
    );
  }
  else {
    return null;
  }
};


class App extends Component {
  constructor() {
    super();
    this.state = {
      username: 'uverma',
      isAdmin: false,
      applicationName: '',
  }
  this.handleSelect = this.handleSelect.bind(this);
}
  //Use for initial binding(component has been rendered once)
  // componentWillMount() {
  // }

  //Use for API calls
  componentDidMount() {
    this.getUserDetails();
    this.getUsernameForAdminPanel();
  }

  getUserDetails()  {
    $.ajax({
      url: 'https://hbackup-catalog.web.cern.ch/auth',
      dataType: 'json',
      cache: 'false',
      contentType: 'application/json',
      success: function(data) {
        this.setState({
          username: data.username,
          isAdmin: data.isAdmin,
        }, function() {
          console.log(this.state);
        })
      }.bind(this),
      error: function(xhr, status, err) {
        console.log(err);
      }
    })
  }

  //This api is called if the admin selects an applicationsData
  //This functions maps the appname <> username to make further api calls
  getUsernameForAdminPanel()  {
    $.ajax({
      url: 'http://127.0.0.1:8000/get-username/' + (this.state.applicationName) + '/',
      dataType: 'json',
      cache: 'false',
      contentType: 'application/json',
      success: function(data) {
        this.setState({
          username: data[0]['username'],
        }, function() {
          console.log(this.state);
        })
      }.bind(this),
      error: function(xhr, status, err) {
        console.log(err);
      }
    })
  }

  handleSelect(eventKey)  {
      this.setState({
        applicationName: eventKey
      }, function() {
        this.getUsernameForAdminPanel();
      })
      console.log(eventKey);
  }

  render() {
    return(
      <div className="App">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/"><font color="white">Home</font></a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavItem eventKey={1} href="/backupsets">
              <font color="white">Backup Sets</font>
            </NavItem>
            <NavItem eventKey={2} href="/backuparchives-raw">
              <font color="white">Backup Archives Raw Data</font>
            </NavItem>
            <NavItem eventKey={3} href="/backup-operations">
              <font color="white">Backup Operations</font>
            </NavItem>
            <NavItem eventKey={4} href="/reports">
              <font color="white">Reports</font>
            </NavItem>
            <NavItem eventKey={5} href="/recover-backup">
              <font color="white">Recover Backup</font>
            </NavItem>
          </Nav>
          <Nav pullRight>
          <NavItem eventKey={6} href="#">
            <font color="white">Sign Out</font>
          </NavItem>
          </Nav>
          
        </Navbar>

        <Route path='/$' component={()=>
          <div>
            <HomeData homeData={HomeData} username={this.state.username}/>
          </div>
        }/>

        <Route path='/backuparchives-raw' component={()=>
          <div>
            <BackuparchivesRawData backuparchivesRaw={BackuparchivesRawData} username={this.state.username}/>
          </div>
        }/>

        <Route path='/applications' component={()=>
          <div>
            <ApplicationsData applicationsData={ApplicationsData} username={this.state.username}/>
          </div>
        }/>

        <Route path='/backupsets' component={()=>
          <div>
            <Backupsets backupsets={Backupsets} username={this.state.username}/>
          </div>
        }/>

        <Route path='/backup-operations' component={()=>
          <div>
            <Backupoperations backupoperations={Backupoperations} username={this.state.username}/>
          </div>
        }/>

        <Route path='/recover-backup' component={()=>
          <div>
            <RecoverBackupForm recoverbackup={RecoverBackupForm} username={this.state.username}/>
          </div>
        }/>

      <Route path='/reports' component={()=>
          <div>
            <BackupReports backupReports={BackupReports} username={this.state.username}/>
          </div>
        }/>

      </div>
    );
  }
}

export default App;
