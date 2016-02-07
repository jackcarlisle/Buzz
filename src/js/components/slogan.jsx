import React from 'react';

let Slogan = React.createClass({
  render: function() {
    return (
      <div className='slogan-container'>
        <div className='logo-image'>
          <img src='https://cloud.githubusercontent.com/assets/12450298/12289028/ee26d8fa-b9d0-11e5-8af3-0b37f9d26960.png'/>
        </div>
        <div className='slogan-header'>
          <h1>Bored of being stuck inside, flicking through your phone? Thought so.</h1>
          <h3>That's where we come in! It's time to get out there you cheeky rascal...</h3>
          <h2>Welcome to the Hava App!</h2>
        </div>
        <div className='slogan-text'>
          <p>Join us for our March pilot in SW London, when we will give you a reason to stop being a hermit and get out with your mates!</p>
        </div>
      </div>
    );
  }
});

module.exports = Slogan;
