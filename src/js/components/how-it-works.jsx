import React from 'react';

let HowItWorks = React.createClass({
  render: function() {
    return (
      <div className='works-container'>
        <h2>How does it work?</h2>
        <div className='glyphicon glyphicon-arrow-down btn-lg'></div>
        <div className='glyphicon glyphicon-arrow-down btn-lg'></div>
        <div className='row'>
          <div className='text-container'>
              <div className='instruction-container'>
                <div className='glyphicon glyphicon-flash btn-lg icon'></div>
                <div>The app will show you which drinks are being promoted at a particular time</div>
                <br/>
              </div>
              <div className='instruction-container'>
                <div className='glyphicon glyphicon-phone btn-lg icon'></div>
                <div>All you have to do is order that drink and show your unique QR code at the bar when ordering</div>
              </div>
              <div className='instruction-container'>
                <div className='glyphicon glyphicon-glass btn-lg icon'></div>
                <div>The rest is up to you</div>
                <br/>
                <br/>
              </div>
              <div className='web-app'>In the meantime, if you're looking for more information on Hava, or are interested in signing up either as a business or customer, please stick your details into the boxes below and we'll be in touch. <br/> Have a good day gorgeous.</div>
            </div>
          </div>
      </div>
    );
  }
});

module.exports = HowItWorks;
