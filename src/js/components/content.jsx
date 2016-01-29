import React from 'react';
import Firebase from 'firebase';


let Slogan = React.createClass({
  render: function() {
    return (
      <div className='slogan-container'>
        <div className='logo-image'>
          <img src='https://cloud.githubusercontent.com/assets/12450298/12289028/ee26d8fa-b9d0-11e5-8af3-0b37f9d26960.png'/>
        </div>
        <div className='slogan-header'>
          <h1>Well well, come for a sneaky peek you cheeky rascal?</h1>
          <h3>Welcome to the Hava App!</h3>
        </div>
        <div className='slogan-text'>
          <p>You've caught us before we are ready!
          But don't worry, our pilot is coming very soon to South London, when we will
          be able to show you with the best bars in the area at even better rates!</p>
        </div>
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
      survey: ''
    };
  },

  submitDetails: function(event) {
    event.preventDefault();
    this.setState({
      detailsSubmitted: true
    });
  },

  sendDetailsToDatabase: function(data) {
    var idKey = new Date();
    var database = new Firebase('https://amber-torch-6337.firebaseio.com/' + idKey);
    var uniqueIdEntry = database.push();
    return uniqueIdEntry.set(data);
  },

  handleSubmit: function(event) {
    event.preventDefault();
    var firstName = this.preventScriptInjection(this.state.firstName).trim();
    var lastName  = this.preventScriptInjection(this.state.lastName).trim();
    var email     = this.preventScriptInjection(this.state.email).trim();
    var postcode  = this.preventScriptInjection(this.state.postcode).trim();
    var survey    = this.preventScriptInjection(this.state.survey).trim();

    var data = {
      'FirstName': firstName,
      'LastName' : lastName,
      'Email'     : email,
      'Postcode'  : postcode,
      'Survey'    : survey
    };

    this.sendDetailsToDatabase(data);

    //TODO request to server - sending the form data to the backend
    //IGNORE AJAX REQUEST BELOW - used only as a learning example
    // console.log(data);
    $.ajax({
      url: this.props.url,
      type: 'POST',
      data: data,
      success: function(data) {
        this.setState({data: data});
        console.log(data);
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
    // console.log("AJAX END");

    if(!firstName || !lastName || !email || !postcode || !survey) {
      return;
    }
    this.setState({
      detailsSubmitted: true,
      firstName: '',
      lastName: '',
      email: '',
      postcode: '',
      survey: ''
    });

  },

  preventScriptInjection: function(string) {
    var cleanString = string.replace(/<.*>/g, '');
    return cleanString;
  },

  handleChange: function(name, event) {
    var change = {};
    change[name] = this.preventScriptInjection(event.target.value);
    this.setState(change, () => {
      // console.log(this.preventScriptInjection(this.state.firstName));
      // console.log(this.state.lastName.replace(/<.*>/g, ''));
      // console.log(this.state.email.replace(/<.*>/g, ''));
      // console.log(this.state.postcode.replace(/<.*>/g, ''));
      // console.log(this.state.survey.replace(/<.*>/g, ''));
    });
//setState is asynchronous, therefore it takes a callback where you can log things after it's changed

  },

  render: function() {

    var firstName = this.preventScriptInjection(this.state.firstName);
    var lastName  = this.preventScriptInjection(this.state.lastName);
    var email     = this.preventScriptInjection(this.state.email);
    var postcode  = this.preventScriptInjection(this.state.postcode);
    var survey    = this.preventScriptInjection(this.state.survey);

    var submitForm = (
      <div className='form-group'>
        <form id='sign_up' onSubmit={this.handleSubmit}>
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
          <button type='submit' className='btn btn-md submit'>Submit your details!</button>
        </form>
      </div>
    );


    var submittedText = (
      <div className='replacement-text'>
      <h3>Thank you for joining us!</h3>
      <div>We'll be in touch...</div>
      </div>
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
