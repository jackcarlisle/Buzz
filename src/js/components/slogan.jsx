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
          <p>We know what you’re thinking, the choices are endless! New brands are popping up everywhere, and it’s getting beyond confusing!<br/>
          As a result, you end up drinking the same old stuff, or ask the barman for the first thing you see… </p>
          <p>That’s where we come in... <br/> Hava will bring you the best brands, in the best bars, for the best prices… Could this get any better?!</p>
          <p>We work with some of the newest and most exciting brands to ensure that you are able to find them. <br/>
          Some of the finest drinks in the country have yet to be fully unearthed and we think it’s about time that changed!</p>
          <p>After a phenomenal beta pilot in March, the team have listened, taken onboard your feedback, and now it’s time for action. <br/>
           The Hava App will be ready to launch in the summer of 2016…</p>
        </div>
      </div>
    );
  }
});

module.exports = Slogan;
