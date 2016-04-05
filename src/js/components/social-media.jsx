import React from 'react';

let SocialMediaLinks = React.createClass({
  render: function() {

    return (
      <div className='social-block'>
        <h4>Are you a business? Get on our radar!</h4>
        <div className='email'>
          <a className="email-link" href="mailto:office@hava-app.com">Email us at office@hava-app.com</a>
        </div>
        <div className='row social'>
          <a href="https://www.instagram.com/thehavaapp/">
            <img className='icon-in' src="https://cdn1.iconfinder.com/data/icons/iconza-circle-social/64/697067-instagram-512.png"/>
          </a>
          <a href="https://www.facebook.com/havaapp/">
            <img className='icon-fb' src="https://cdn1.iconfinder.com/data/icons/iconza-circle-social/64/697057-facebook-512.png"/>
          </a>
          <a href="https://twitter.com/thehavaapp">
            <img className='icon-tw' src="https://cdn1.iconfinder.com/data/icons/iconza-circle-social/64/697029-twitter-512.png"/>
          </a>
        </div>
      </div>
    );
  }
});

module.exports = SocialMediaLinks;
