import React from 'react';

let Slogan = React.createClass({
  render: function () {
    return (
      <div className='slogan-container'>
        <div className='logo-image'>
          <img src='https://cloud.githubusercontent.com/assets/12450298/12289028/ee26d8fa-b9d0-11e5-8af3-0b37f9d26960.png'/>
        </div>
        <div className='slogan-header'>
          <h1>What you're drinking...and where...</h1>
          <h2>Welcome to the Hava App!</h2>
        </div>
        <div className='slogan-text'>
          <div className='slogan-paragraph'>Launching in summer 2016, Hava will bring you the most exciting drinks brands in London’s best bars.</div>
          <div className='slogan-paragraph'>With so many new drinks appearing on the market, Hava have decided to help you discover the finest amongst them at an even better price!</div>
          <div className='slogan-paragraph'>Hang in there. We’re coming soon.</div>
        </div>
      </div>
    );
  }
});

module.exports = Slogan;
