import React, { Component } from 'react';

class ProjectItem extends Component {

//Passing this item to an upper level => to Project.js
  deleteProject(id) {
    this.props.onDelete(id);
  }

  render() {
    return (
    	<li className = "Project">
    		<strong>{this.props.project.title}</strong>: {this.props.project.category} <a href="#" onClick={this.deleteProject.bind(this, this.props.project.id)}>X</a>
    	</li>
    );
  }
}

export default ProjectItem;
