import React from 'react';
import Formsy from 'formsy-react';
import { Input } from 'formsy-react-components';

let NavBar     = require('../navbar.jsx');
let Slogan     = require('../slogan.jsx');
let Content    = require('../content.jsx');
let HowItWorks = require('../how-it-works.jsx');
let Social     = require('../social-media.jsx');

let Home = React.createClass({
  render: function() {
    return (
      <div>
        <NavBar />
        <Slogan />
        <HowItWorks />
        <Content url="/submitted" />
        <Social />
      </div>
    );
  }
});

module.exports = Home;
