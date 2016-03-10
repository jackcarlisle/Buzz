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
          <p>Our pilot is now live! Bringing you Balham's best bars and an even better reason to go!</p>
          <p>Make sure you click the sign in button below so you don't miss out...</p>
          <a href='http://hava-mvp.herokuapp.com/#/?_k=mob2dt' className='button'>
            <span>sign in</span>
          </a>
          <p>Pssst...no private browsers</p>
        </div>
      </div>
    );
  }
});

module.exports = Slogan;
