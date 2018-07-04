import React, { Component } from 'react';
import ProjectItem from './ProjectItem';
import PropTypes from 'prop-types'

class Projects extends Component {

// Passing the id to the main component => App.js
  deleteProject(id) {
    this.props.onDelete(id);
  }

  render() {
  	let projectItems;
  	//If the projects are found, pass them to ProjectItems
  	if(this.props.projects)	{
  		projectItems = this.props.projects.map(project => {
  			return	(
  				<ProjectItem onDelete={this.deleteProject.bind(this)} key={project.title} project={project} />
  			);
  		});
  	}
  	// else, return this
    return (
      <div className="Projects">
        <h3>Latest Projects</h3>
        {projectItems}
      </div>
    );
  }
}

//Used to define the data types(include PropTypes as a seperate import)
Projects.propTypes = {
  projects: PropTypes.array,
  onDelete: PropTypes.func
}

export default Projects;
