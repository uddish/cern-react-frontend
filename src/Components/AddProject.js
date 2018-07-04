import React, { Component } from 'react';
import uuid from 'uuid';

class AddProject extends Component {

  constructor() {
    super();
    this.state = {
      //newProject is an object here which will be set later
      newProject: {}
    }
  }

  static defaultProps = {
    categories: ['Web Design', 'Mobile Development', 'Hybrid Development']
  }

  handleSubmit(e)  {
    //title value that is selected
    if(this.refs.title.value === '')  {
      alert("Title is empty")
    } else {
      this.setState({newProject: {
        id: uuid.v4(),
        title: this.refs.title.value,
        category: this.refs.category.value
      }}, function()  {           //Callback function
        //addProject is fetched in App.js with the values
        this.props.addProject(this.state.newProject);
      });
    }
    e.preventDefault();
  }

// Getting the above props from "categories" and mapping them with a single category
  render() {
    let categoryOptions = this.props.categories.map(category => {
      return <option key={category} value={category}>{category}</option>
    })
    return (
      <div>
        <h3>Add Project</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <label>Title</label><br />
            <input type="text" ref="title"/>
          </div>
          <div>
            <label>Category</label><br />
            <select ref="category">
              {categoryOptions}
            </select>
          </div>
          <br />
          <input type="submit" value="submit"/>
        </form>
      </div>
    );
  }
}

export default AddProject;
