import React from 'react';

let Slogan = React.createClass({
  render: function() {
    return (
      <div className='slogan-container'>
        <h1>Well well, come for a sneaky peek you cheeky rascal?</h1>
        <h3>Welcome to the Hava App!</h3>
        <div>You've caught us before we are ready!<br/>
        But don't worry, very soon we will be able to provide you<br/>
      with the best bars at the best rates!</div>
      </div>
    );
  }
});


let Content = React.createClass({

  getInitialState: function() {
    return {
      detailsSubmitted: false,
      firstName: '',
      lastName: '',
      email: '',
      postcode: '',
      survey: '',
    };
  },

  submitDetails: function() {
    this.setState({
      detailsSubmitted: true
    });
  },

  handleSubmit: function(txt) {
  },

  handleChange: function(name, event) {
    var change = {};
    change[name] = event.target.value;
    this.setState(change, ()=>{
      console.log(this.state.firstName);
      console.log(this.state.lastName);
      console.log(this.state.email);
      console.log(this.state.postcode);
      console.log(this.state.survey);
    });


  },

  render: function() {

    var firstName = this.state.firstName;
    var lastName  = this.state.lastName;
    var email     = this.state.email;
    var postcode  = this.state.postcode;
    var survey    = this.state.survey;

    var submitForm = (
      <div className='form-group'>
        <form id='sign_up' method='POST' action=''>
          <div className='input-container'>
            <div className='row'>
              <input
                className='form-control box-spacing'
                defaultValue={firstName}
                id="first_name"
                name='landing[first_name]'
                placeholder='First name'
                required type='text'
                onChange={this.handleChange.bind(this, 'firstName')}
              />
              <input
                className='form-control box-spacing'
                value={lastName}
                id="last_name"
                name='landing[last_name]'
                placeholder='Last name'
                required type='text'
                onChange={this.handleChange.bind(this, 'lastName')}
              />
            </div>
            <div className='row'>
              <input
                className='form-control box-spacing'
                value={email}
                id='email'
                name='landing[contact_email]'
                placeholder='Your email'
                required type='email'
                onChange={this.handleChange.bind(this, 'email')}
              />
              <input
                className='form-control box-spacing'
                value={postcode}
                id='postcode'
                name='landing[postcode]'
                placeholder='Your postcode'
                required type='text'
                onChange={this.handleChange.bind(this, 'postcode')}
              />
            </div>
          </div>
          <div className='row'>
            <div className='dropdown-container'>
              <div id='select_arrow'></div>
              <select className='btn drop' id='survey' name='landing[survey_questions]' onChange={this.handleChange.bind(this, 'survey')}>
                <option value>How did you first hear about Hava?</option>
                <option value='Friends or Family'>Friends or Family</option>
                <option value='Social Media'>Social Media</option>
                <option value='Search Engine'>Search Engine</option>
                <option value='Meet-up or Conference'>Meet-up or Conference</option>
                <option value='Online Ad'>Online Ad</option>
                <option value='Other'>Other</option>
              </select>
            </div>
          </div>
          <button onSubmit={this.submitDetails} type='submit' className='btn btn-md submit'>Submit your details!</button>
        </form>
      </div>
    );


    var submittedText = (
      <div>Thank you!</div>
    );


      return (
        <div>
          <Slogan />
        {this.state.detailsSubmitted ? submittedText : submitForm}
        </div>
      );
  }

});

module.exports = Content;
