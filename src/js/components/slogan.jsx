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
          <p>We know it's cold but it's time to stop being a hermit! Join us in March in SW London when we give you the perfect reason to hit one of your best local bars!</p>
        </div>
      </div>
    );
  }
});

module.exports = Slogan;
