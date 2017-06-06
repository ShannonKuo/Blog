import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {grey300, grey800} from 'material-ui/styles/colors';
import BlogApp from './BlogApp';
import PostList from './PostList';
import Post from './Post';

import registerServiceWorker from './registerServiceWorker';


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
        <Route exact path="/api/post/:id" component={Post} />
        <Route path="/" component={BlogApp} />
      </ Switch>
    </ BrowserRouter>
  </MuiThemeProvider>,
  document.getElementById('root')
);
registerServiceWorker();
