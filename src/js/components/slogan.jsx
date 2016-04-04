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
          <p>Our pilot is now complete - thanks to all you rascals who took part, we hope you had as much fun as we did!</p>
          <p>We're now in full app development mode and things are getting exciting! Very soon we will be on the app store, bringing you some of the finest drinks, in London's best bars! <br/> I mean what more could you want!</p>
        </div>
      </div>
    );
  }
});

module.exports = Slogan;
