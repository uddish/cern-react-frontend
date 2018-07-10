import React, { Component } from 'react';
import Projects from './Components/Projects';
import AddProject from './Components/AddProject';
import Metadata from './Components/Metadata/Metadata';
import ApplicationsData from './Components/Applications/ApplicationsData';
import Backupsets from './Components/Backupsets/Backupsets';
import BackuparchivesRawData from './Components/BackuparchivesRaw/BackuparchivesRawData';
import uuid from 'uuid';
import './App.css';
import $ from 'jquery';
import { Navbar,NavItem,NavDropdown,MenuItem,Nav } from 'react-bootstrap';


class App extends Component {
  constructor() {
    super();
    this.state = {
      projects: [],
      metadata: [],
      applicationData: [],
      backupsets: [],
      backuparchivesRaw: [],
    }
  }

//Fetching metadata from the API
  getMetadata()  {
    $.ajax({
      url: 'http://localhost:8000/metadata/',
      dataType: 'json',
      cache: false,
      contentType : 'application/json',
      success: function(data) {
        this.setState({metadata: data}, function() {
          console.log(this.state);
        })
      }.bind(this),
      error: function(xhr, status, err)  {
        console.log(err);
      }
    });
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
        this.setState({backupsets: data}, function() {
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
          this.setState({backuparchivesRaw: data}, function() {
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
    // this.getMetadata();
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
    return(
      <div className="App">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#home">Home</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavItem eventKey={1} href="#">
              Applications
            </NavItem>
            <NavItem eventKey={2} href="#">
              Backup Sets
            </NavItem>
            <NavItem eventKey={2} href="#">
              Backup Archives Raw Data
            </NavItem>
          </Nav>
        </Navbar>;

        <ApplicationsData applicationData={this.state.applicationData}/>
        <Backupsets backupsets={this.state.backupsets}/>
        <BackuparchivesRawData backuparchivesRaw={this.state.backuparchivesRaw}/>
      </div>
    );
  }
}

export default App;
