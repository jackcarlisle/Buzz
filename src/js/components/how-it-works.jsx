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
                <div>Our bars will notify you when they have a special offer for Hava users</div>
                <br/>
              </div>
              <div className='instruction-container'>
                <div className='glyphicon glyphicon-phone btn-lg icon'></div>
                <div>Then all you have to do is generate the unique Hava code for that bar, make your way there and show when ordering</div>
              </div>
              <div className='instruction-container'>
                <div className='glyphicon glyphicon-glass btn-lg icon'></div>
                <div>The rest is up to you, but Hava great time on us! (see what we did there...)</div>
                <br/>
              </div>
            </div>
          </div>
      </div>
    );
  }
});

module.exports = HowItWorks;
