import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import BlogApp from './BlogApp';
import NewPost from './NewPost';
import Post from './Post';

import registerServiceWorker from './registerServiceWorker';
import './index.css';

//var BrowserRouter = require('react-router-dom').BrowserRouter
//var Route = require('react-router-dom').Route
//var Switch = require('react-router-dom').Switch

ReactDOM.render(
  <BrowserRouter>
    <Switch>
	    <Route path="/" component={BlogApp} />
	    <Route path="/new" component={NewPost} />
	    <Route path="/post" component={Post} />
    </ Switch>
	</ BrowserRouter>,
  document.getElementById('root')
);
registerServiceWorker();
