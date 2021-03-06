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
        <div className='backgroundContainer'>
          <div className='bgImageContainer'>
            <img className='bgImage' src='https://cloud.githubusercontent.com/assets/12450298/14259919/0cf10308-faa1-11e5-8a8a-401c58151267.jpg'/>
          </div>
          <div className='blackOpacity'>
            <div className='background'>
              <Slogan />
              <HowItWorks />
              <Content url='/submitted'/>
              <Social />
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Home;
