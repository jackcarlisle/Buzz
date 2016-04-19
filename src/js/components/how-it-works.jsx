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
                <div>The app will list the Hava bars and drinks that are in your area</div>
              </div>
              <div className='instruction-container'>
                <div className='glyphicon glyphicon-phone btn-lg icon'></div>
                <div>Make your way there, show your QR code, and order…</div>
              </div>
              <div className='instruction-container'>
                <div className='glyphicon glyphicon-glass btn-lg icon'></div>
                <div>The rest is up to you, but Hava good one on us! (see what we did there)</div>
              </div>
            </div>
          </div>
      </div>
    );
  }
});

module.exports = HowItWorks;
