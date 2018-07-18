// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, BrowserRouter, Link, Route } from 'react-router-dom';

import Routes from './routes';
import App from './components/App';
import About from './components/About';
import NotFound from './components/NotFound';

import './index.css';


ReactDOM.render((
  <BrowserRouter>
    <Switch>
  <Route exact path='/' component={App}/>
  {/* both /roster and /roster/:number begin with /roster */}
  <Route path='/about' component={About}/>
  <Route path='/notfound' component={NotFound}/>
</Switch>
  </BrowserRouter>
), document.getElementById('root'))