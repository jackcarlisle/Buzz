import React from 'react';

let HowItWorks = React.createClass({
  render: function() {
    return (
      <div className='works-container'>
        <h2>So how does it work?</h2>
        <div className='glyphicon glyphicon-arrow-down btn-lg'></div>
        <div className='glyphicon glyphicon-arrow-down btn-lg'></div>
        <div className='row'>
          <div className='text-container'>
              <div className='instruction-container'>
                <div className='glyphicon glyphicon-flash btn-lg icon'></div>
                <div>Our Hava bars will notify you when they have reduced their prices.</div>
              </div>
              <div className='instruction-container'>
                <div className='glyphicon glyphicon-phone btn-lg icon'></div>
                <div>Then all you have to do is show the App at the bar and Hava great time on us.</div>
              </div>
              <div className='instruction-container'>
                <div className='glyphicon glyphicon-glass btn-lg icon'></div>
                <div>The rest is up to you! filler text filler text filler text filler text</div>
              </div>
            </div>
          </div>
      </div>
    );
  }
});

module.exports = HowItWorks;
