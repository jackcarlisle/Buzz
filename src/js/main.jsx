'use strict';

import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, IndexRoute } from 'react-router';


let Home = require('./components/views/home.jsx');

require('../styles/main.js');

let rootElement = document.getElementById('react-content');

render((
  <Router>
    <Route path="/" component={Home}>
      <IndexRoute component={Home} />
    </Route>
  </Router>
), rootElement);
