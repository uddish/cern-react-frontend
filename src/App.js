import React, { Component } from 'react';
import Projects from './Components/Projects';
import AddProject from './Components/AddProject';
import Metadata from './Components/Metadata/Metadata';
import ApplicationsData from './Components/Applications/ApplicationsData';
import Backupsets from './Components/Backupsets/Backupsets';
import Backupoperations from './Components/BackupOperations/Backupoperations';
import BackuparchivesRawData from './Components/BackuparchivesRaw/BackuparchivesRawData';
import uuid from 'uuid';
import './App.css';
import $ from 'jquery';
import { Navbar,NavItem,NavDropdown,MenuItem,Nav } from 'react-bootstrap';


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

// <Route path='/applications' component={ApplicationsDataComponent}/>

class App extends Component {
  constructor() {
    super();
    this.state = {
      projects: [],
      applicationData: [],
      backupsets: [],
      backuparchivesRaw: [],
      backupoperations: [],
    }
  }

//Fetching applications data from the API
//TODO Replace this hardcoded value with the dynamic value from the url
  getApplicationsData() {
    $.ajax({
      url: 'http://localhost:8000/applications/3/',
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

//Fetching backup sets data from the API
  getBackupSets() {
    $.ajax({
      url: 'http://localhost:8000/backupsets/3/',
      dataType: 'json',
      cache: 'false',
      contentType: 'application/json',
      success: function(data) {
        this.setState({backupsets: data.results}, function() {
          console.log(this.state);
        })
      }.bind(this),
      error: function(xhr, status, err) {
        console.log(err);
      }
    })
  }

  //Fetching backup archives raw data from the API
    getBackuparchivesRaw() {
      $.ajax({
        url: 'http://localhost:8000/backuparchives-raw/3/',
        dataType: 'json',
        cache: 'false',
        contentType: 'application/json',
        success: function(data) {
          this.setState({backuparchivesRaw: data.results}, function() {
            console.log(this.state);
          })
        }.bind(this),
        error: function(xhr, status, err) {
          console.log(err);
        }
      })
    }

    //Fetching backup operations from the API
    getBackupOperations() {
      $.ajax({
        url: 'http://localhost:8000/backup-operations/3/',
        dataType: 'json',
        cache: 'false',
        contentType: 'application/json',
        success: function(data) {
          this.setState({backupoperations: data}, function() {
            console.log(this.state);
          })
        }.bind(this),
        error: function(xhr, status, err) {
          console.log(err);
        }
      })
    }

//Use for initial binding(component has been rendered once)
  componentWillMount() {
    // this.getProjects();
  }

//Use for API calls
  componentDidMount() {
    this.getApplicationsData();
    this.getBackupSets();
    this.getBackuparchivesRaw();
    this.getBackupOperations();
  }

  handleAddProject(project)  {
    let projects = this.state.projects;
    //Pushing the new project into the "projects array"
    projects.push(project);
    //Resetting the project states
    this.setState({projects: projects});
  }

  handleDeleteProject(id) {
    let projects = this.state.projects;
    let index = projects.findIndex(x => x.id === id);
    projects.splice(index, 1)
    this.setState({projects: projects});
  }

  render() {
    var sidebarContent = <b>Sidebar content</b>;
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
          </Nav>
          <Nav pullRight>
          <NavItem eventKey={1} href="#">
            <font color="white">Sign Out</font>
          </NavItem>
          </Nav>
        </Navbar>

        <Route path='/$' component={()=>
            <div>
            <ApplicationsData applicationData={this.state.applicationData}/>
            <Backupsets backupsets={this.state.backupsets}/>
            <BackuparchivesRawData backuparchivesRaw={this.state.backuparchivesRaw}/>
            </div>
        }/>

        <Route path='/applications' component={()=><ApplicationsData applicationData={this.state.applicationData}/>}/>
        <Route path='/backupsets' component={()=><Backupsets backupsets={this.state.backupsets}/>}/>
        <Route path='/backuparchives-raw' component={()=><BackuparchivesRawData backuparchivesRaw={this.state.backuparchivesRaw}/>}/>
        <Route path='/backup-operations' component={()=><Backupoperations backupoperations={this.state.backupoperations}/>}/>

      </div>
    );
  }
}

export default App;
