import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FlatButton from 'material-ui/FlatButton'
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

    fetch(`/api/post/${id}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
        'Content-Type': 'application/json',
    })
    .then(res => res.json())
    .then((data) => {
      this.setState({ post: data })
    })
    .catch(err => console.error(err));

  }

  render() {
    return (
      <div className="Post">
        <p> {this.state.post.title} </p>
        <p> {this.state.post.content} </p>
        <Link to = {'/'}>
          <FlatButton
            label = "Back To Home"
          />
        </Link>
      </div>
    );
  }

}
export default Post;
