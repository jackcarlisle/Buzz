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
                <div>Our bars will text you when they have a special offer for Hava users</div>
                <br/>
              </div>
              <div className='instruction-container'>
                <div className='glyphicon glyphicon-phone btn-lg icon'></div>
                <div>Then all you have to do is show the unique Hava code for that bar when ordering</div>
              </div>
              <div className='instruction-container'>
                <div className='glyphicon glyphicon-glass btn-lg icon'></div>
                <div>The rest is up to you, but Hava great time on us! (see what we did there...)</div>
                <br/>
              </div>
              <div className='web-app'>At this stage for the pilot we are operating as a mobile web app. But don't worry, you'll still get the same great bars for the same great prices.</div>
              <div>Once we're up and running on the app store you'll be the first to know you cheeky monkey!</div>
            </div>
          </div>
      </div>
    );
  }
});

module.exports = HowItWorks;
