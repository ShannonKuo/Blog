import React, { Component } from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import FlatButton from 'material-ui/FlatButton'
import ContentAdd from 'material-ui/svg-icons/content/add';
import TextField from 'material-ui/TextField';

import './App.css';

class BlogApp extends Component {
  constructor() {
  super()
  this.state = {
    posts: [],
    newPost: { id: '', title: '', content: '' },
    index: 0,
    }
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleContentChange = this.handleContentChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleTitleChange(e) {
    if (e.key === 'Enter') {
      this.handleSubmit();
    } else {
      this.setState({
        newPost: {
	  id: this.state.index,	
          title: e.target.value,
	},
      });
    }
  }
  handleContentChange(e) {
    if (e.key === 'Enter') {
      this.handleSubmit();
    } else {
      this.setState({
        newPost: {
          id: this.state.index,
          content: e.target.value,
        },
      });
    }	
  }
  handleSubmit() {
    const postList = this.state.posts;
    postList.push({
      id: this.state.newPost.id,
      title: this.state.newPost.title,
      content: this.state.newPost.content,
    });	
    this.setState({
      newPost: {
        id: '',
        title: '',
        content: '',
      }
    })
  }
	
  render() {
    return (
      <div className="BlogApp">
        <div className="App-header">
          <h2>Turtur Blog</h2>
        </div>
	<TextField
	  type = "text"
          hintText = "title..."
	  onChange = {this.handleTitleChange}
	  value = {this.state.newPost.title}
        />
	<TextField
	  type = "text"
          hintText = "write something..."
	  onChange = {this.handleContentChange}
	  value = {this.state.newPost.content}
	/>
        <FlatButton
          onClick = {this.handleSubmit}
          label = "submit"
        />
      </div>
    );
  }
}

export default BlogApp;
