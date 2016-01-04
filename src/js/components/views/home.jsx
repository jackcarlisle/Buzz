import React from 'react';
import Formsy from 'formsy-react';
import { Input } from 'formsy-react-components';

let NavBar = require('../navbar.jsx');

let Home = React.createClass({
  render: function() {
    return (
      <div>
        <NavBar />
        <h1>Hello World</h1>
      </div>
    );
  }
});

module.exports = Home;
