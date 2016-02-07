import React from 'react';

let Slogan = React.createClass({
  render: function() {
    return (
      <div className='slogan-container'>
        <div className='logo-image'>
          <img src='https://cloud.githubusercontent.com/assets/12450298/12289028/ee26d8fa-b9d0-11e5-8af3-0b37f9d26960.png'/>
        </div>
        <div className='slogan-header'>
          <h1>Well well, come for a sneaky peek you cheeky rascal?</h1>
          <h3>Welcome to the Hava App!</h3>
        </div>
        <div className='slogan-text'>
          <p>You've caught us before we are ready!
          But don't worry, our pilot is coming very soon to South London, when we will
          be able to show you with the best bars in the area at even better rates!</p>
        </div>
      </div>
    );
  }
});

module.exports = Slogan;
