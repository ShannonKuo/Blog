import React, { Component } from 'react';
import ReactHtmlParser from 'react-html-parser';
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
    const html = this.state.post.content.replace(/\r?\n/g, '<br />');
    return (
      <div className="Post">
        <div className="Back">
          <Link to = {'/'}>
            <FlatButton
              label = "Back To Home"
            />
          </Link>
        </div>
        <div className="SinglePostTitle">
          <p> {this.state.post.title} </p>
            </div>
            <div className="SinglePostContent">
          <p> {ReactHtmlParser(html)} </p>
        </div>
      </div>
    );
  }

}
export default Post;
