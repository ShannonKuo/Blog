import React, { Component } from 'react';
import './App.css';

class Post extends Component {
  constructor() {
		super();
	  this.state = {
		  post: { id: '', title: '', content: '' },
		}
	}


	componentDidMount() {
		const {id} = this.props.match.params;
    fetch(`/post/${id}`)
      .then(res => res.json())
      .then((data) => {
        this.setState({ post: data })
      })
      .catch(err => console.error(err));
  }

  render() {
    return (
      <div className="Post">
			  <p> post </p>
			  <p> {this.state.post.title} </p>
			  <p> {this.state.post.content} </p>
      </div>
    );
  }
}

export default Post;
