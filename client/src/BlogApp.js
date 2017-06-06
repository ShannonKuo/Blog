import React, { Component } from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import FlatButton from 'material-ui/FlatButton'
import ContentAdd from 'material-ui/svg-icons/content/add';
import TextField from 'material-ui/TextField';

import PostList from './PostList';
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
    this.handleAddPost = this.handleAddPost.bind(this);
    this.handlePostServer = this.handlePostServer.bind(this);
  }
  handleTitleChange(e) {
    if (e.key === 'Enter') {
      this.handleSubmit();
    } else {
      this.setState({
        newPost: {
          id: this.state.index,	
          title: e.target.value,
          content: this.state.newPost.content,
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
          title: this.state.newPost.title,
        },
      });
    }	
  }
  handleSubmit() {
    this.handleAddPost();
    this.handlePostServer();
  }

  handleAddPost() {
    const postList = this.state.posts;
    postList.push({
      id: this.state.newPost.id,
      title: this.state.newPost.title,
      content: this.state.newPost.content,
    });	
    this.setState({ index: this.state.index + 1 });
  }
  handlePostServer() {
    fetch('/api/addpost', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: this.state.newPost.id,
        title: this.state.newPost.title,
        content: this.state.newPost.content,
      }),
    })
    .then(res => res.json() )
    .then((response) => {
      if (!response.ok) throw new Error(response.statusText)
      return response.json()
    });
    this.setState({
      newPost: {
        id: '',
        title: '',
        content: ''
      }
    });
  }
  componentDidMount() {
    fetch('/api/posts')
      .then(res => res.json())
      .then((data) => {
        this.setState({ posts: data })
        this.setState({ index: data.length })
      })
      .catch(err => console.error(err));
  }
  render() {
    return (
      <div className="BlogApp">
        <div className="Appheader">
          <h2>Turtur Blog</h2>
        </div>
        <div className="Title">
          <TextField
            type = "text"
            hintText = "title..."
            onChange = {this.handleTitleChange}
            value = {this.state.newPost.title}
          />
        </div>
        <div className="Input">
          <textarea
            type = "text"
            rows = "4"
            cols = "50"
            onChange = {this.handleContentChange}
            value = {this.state.newPost.content}
          />
        </div>
        <div className="Submit">
          <FlatButton
            onClick = {this.handleSubmit}
            label = "submit"
          /> 
        </div>
        <div className="container">
          {this.state.posts.map( post => 
            <div className = "postList" key = {post.id}>
              <PostList
                post = {post}
              />
            </div>,
          )}
        </div>
      </div>
    );
  }
}

export default BlogApp;
