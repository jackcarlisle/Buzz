import React from 'react';
import Formsy from 'formsy-react';
import { Input } from 'formsy-react-components';

let NavBar  = require('../navbar.jsx');
let Content = require('../content.jsx');

let Home = React.createClass({
  render: function() {
    return (
      <div>
        <NavBar />
        <Content />
        <h1>Hello World</h1>
      </div>
    );
  }
});

module.exports = Home;
