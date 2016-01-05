import React     from 'react';
import Formsy    from 'formsy-react';
import { Input } from 'formsy-react-components';

let Content = React.createClass({

  render: function() {
      var sharedProps = {
      };
      return (
        <div className='form-group'>
          <form id='sign_up' method='post'>
            <div className='input-container'>
              <div className='row'>
                <input
                  className='form-control box-spacing'
                  id='first_name'
                  name='landing[first_name]'
                  placeholder='First name'
                  required type='text'
                />
                <input
                  className='form-control box-spacing'
                  id='last_name'
                  name='landing[last_name]'
                  placeholder='Last name'
                  required type='text'
                />
              </div>
              <div className='row'>
                <input
                  className='form-control box-spacing'
                  id='email'
                  name='landing[contact_email]'
                  placeholder='Your email'
                  required type='email'
                />
                <input
                  className='form-control box-spacing'
                  id='postcode'
                  name='landing[postcode]'
                  placeholder='Your postcode'
                  required type='text'
                />
              </div>
            </div>
            <div className='row'>
              <div className='dropdown-container'>
                <div id='select_arrow'></div>
                <select className='btn drop' id='survey' name='landing[survey_questions]'>
                  <option value>How did you first hear about Buzz?</option>
                  <option value='Friends or Family'>Friends or Family</option>
                  <option value='Social Media'>Social Media</option>
                  <option value='Search Engine'>Search Engine</option>
                  <option value='Meet-up or Conference'>Meet-up or Conference</option>
                  <option value='Online Ad'>Online Ad</option>
                  <option value='Other'>Other</option>
                </select>
              </div>
            </div>
            <button type='submit' className='btn btn-md submit'>Submit your details!</button>
          </form>
        </div>
      );
  }
});

module.exports = Content;
