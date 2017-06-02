import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {grey300, grey800} from 'material-ui/styles/colors';
import BlogApp from './BlogApp';
import NewPost from './NewPost';
import Post from './Post';

import registerServiceWorker from './registerServiceWorker';
import './index.css';


injectTapEventPlugin();

const muiTheme = getMuiTheme({
  palette: {
    textColor: grey800,
    primary1Color: grey800,
  },
});

ReactDOM.render(
  <MuiThemeProvider muiTheme={muiTheme}>
    <BrowserRouter>
      <Switch>
        <Route path="/" component={BlogApp} />
        <Route path="/new" component={NewPost} />
        <Route path="/post" component={Post} />
      </ Switch>
    </ BrowserRouter>
  </MuiThemeProvider>,
  document.getElementById('root')
);
registerServiceWorker();
