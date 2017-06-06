import React, { Component } from 'react';
import ReactHtmlParser from 'react-html-parser';
import { Link } from 'react-router-dom';
import Radium from 'radium';
import './App.css';

var RadiumLink = Radium(Link);
var RadiumStyle = {
  style: {
	  color: '#000000',
		':hover': {
		  color: '#616161',
		},
	},
};
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
			  <RadiumLink 
				  style={[
					  RadiumStyle.style,
					]}
				  to = {`/api/post/${post.id}`}
			  >
				  <div className="PostTitle">
			      <p>{post.title}</p>
					</div>
			  </RadiumLink>
      </div>
    );
  }
}

export default PostList;
