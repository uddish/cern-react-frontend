import React, { Component } from 'react';
import ApplicationsData from './Components/Applications/ApplicationsData';
import HomeData from './Components/Home/HomeData';
import Backupsets from './Components/Backupsets/Backupsets';
import Backupoperations from './Components/BackupOperations/Backupoperations';
import BackuparchivesRawData from './Components/BackuparchivesRaw/BackuparchivesRawData';
import RecoverBackupForm from './Components/RecoverBackup/RecoverBackupForm';
import './App.css';
import { Navbar,NavItem,Nav } from 'react-bootstrap';


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

  //Use for initial binding(component has been rendered once)
  componentWillMount() {
  }

  //Use for API calls
  componentDidMount() {
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
            <NavItem eventKey={1} href="/applications">
              <font color="white">Applications</font>
            </NavItem>
            <NavItem eventKey={2} href="/backupsets">
              <font color="white">Backup Sets</font>
            </NavItem>
            <NavItem eventKey={3} href="/backuparchives-raw">
              <font color="white">Backup Archives Raw Data</font>
            </NavItem>
            <NavItem eventKey={4} href="/backup-operations">
              <font color="white">Backup Operations</font>
            </NavItem>
            <NavItem eventKey={5} href="#">
              <font color="white">Reports</font>
            </NavItem>
          </Nav>
          <Nav pullRight>
          <NavItem eventKey={1} href="/recover-backup">
            <font color="white">Recover Backup</font>
          </NavItem>
          <NavItem eventKey={1} href="#">
            <font color="white">Sign Out</font>
          </NavItem>
          </Nav>
        </Navbar>
        <Route path='/$' component={()=>
            <div>
              <HomeData homeData={HomeData}/>
            </div>
        }/>
        <Route path='/applications' component={ApplicationsData}/>
        <Route path='/backupsets' component={Backupsets}/>
        <Route path='/backuparchives-raw' component={BackuparchivesRawData}/>
        <Route path='/backup-operations' component={Backupoperations}/>
        <Route path='/recover-backup' component={RecoverBackupForm}/>

      </div>
    );
  }
}

export default App;
