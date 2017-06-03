import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

class PostList extends Component {
	constructor() {
    super()
	  this.state = {
		
		}
	  this.clickPost = this.clickPost.bind(this);
	}
	clickPost(id) {
	  this.props.clickPost(id);
	}
  render() {
		const post = this.props.post;
    return (
      <div
			  className="PostList"
		  >
			  <Link to = {`/post/${post.id}`}>
			    <p>title:   {post.title}</p>
			    <p>content: {post.content}</p>
			  </Link>
      </div>
    );
  }
}

export default PostList;
