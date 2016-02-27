import React from 'react';

let Slogan = React.createClass({
  render: function () {
    return (
      <div className='slogan-container'>
        <div className='logo-image'>
          <img src='https://cloud.githubusercontent.com/assets/12450298/12289028/ee26d8fa-b9d0-11e5-8af3-0b37f9d26960.png'/>
        </div>
        <div className='slogan-header'>
          <h1>Ready for the bar yet rascals? So are we.</h1>
          <h2>Welcome to the Hava App!</h2>
        </div>
        <div className='slogan-text'>
          <p>It's nearly time for our pilot, bringing you Balham's best bars and an even better reason to go!</p>
          <p>If you live in London, make sure you click HERE so you don't miss out...</p>
          <p>Clock's ticking you should probably do that now...</p>
          <p className='button'>
            <span>press me</span>
          </p>
        </div>
      </div>
    );
  }
});

module.exports = Slogan;
