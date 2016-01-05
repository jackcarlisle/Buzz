import React     from 'react';
import Formsy    from 'formsy-react';
import { Input } from 'formsy-react-components';

let Content = React.createClass({

  render: function() {
      var sharedProps = {
      };
      return (
        <div>
          <form id='sign_up' method='post'>
            <div class='row'>
              <input
                class='example'
                id='first_name'
                name='landing[first_name]'
                placeholder='First name'
                required type='text'
              />
              <input
                class='example'
                id='last_name'
                name='landing[last_name]'
                placeholder='Last name'
                required type='text'
              />
            </div>
            <div class='row'>
              <input
                class='example'
                id='email'
                name='landing[contact_email]'
                placeholder='Your email'
                required type='email'
              />
              <input
                class='example'
                id='postcode'
                name='landing[postcode]'
                placeholder='Your postcode'
                required type='text'
              />
            </div>
          </form>
        </div>
      );
  }
});

module.exports = Content;
