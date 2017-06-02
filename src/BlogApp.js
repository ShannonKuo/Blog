import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class BlogApp extends Component {
	constructor() {
	  super()
	  this.state = {
	    posts = [],
      newPost = { id: '', title: '', content: '' },
			index: 0,
		},
		this.handleTitleChange = this.handleTitleChange.bind(this);
		this.handleContentChange = this.handleContentChange.bind(this);
		this.handleAddPost = this.handleAddPost.bind(this);
	}
  this.handleTitleChange(e) {
	  if (e.key == 'Enter') {
			this.handleSubmit();
	  } else {
		  this.setState({
				newPost: {
			    id: this.state.index,	
					
				},
			});
		}
		
	}
	this.handleContentChange(e) {
	
	}
  this.handleAddPost() {
	
	}
	
  render() {
    return (
      <div className="BlogApp">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Turtur Blog</h2>
        </div>
				<TextField
				  type = 'text',
					hintText = "title..."
					onChange = {this.handleTitleChange}
					value = {this.state.newPost.content}
			  />
				<TextField
				  type = 'text',
					hintText = "write something..."
					onChange = {this.handleContentChange}
					value = {this.state.newPost.content}
			  />

      </div>
    );
  }
}

export default BlogApp;
