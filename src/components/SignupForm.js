import React, { Component } from 'react';
import {connect} from 'react-redux';
import { signUpUser } from '../actions/auth';

class Signup extends Component {
  state = {
    username: "",
    password: "",
    bio: "",
    slant: 0
  }

  handleChange = (event, selected) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault()

    this.props.signUpUser(this.state, this.props.history)
  }

  slantOptions = [
    {name: 'slant', key: 'left', value: '75', text: 'Left'},
    {name: 'slant', key: 'center', value: '50', text: 'Center'},
    {name: 'slant', key: 'right', value: '25', text: 'Right'}
  ]

  render() {
    return (
      <div className='form' id='sign-up'>
        <form onSubmit={this.handleSubmit}>
          <h1>Sign Up</h1>
          <div className='form-field'>
            <input
              name='username'
              placeholder='Username'
              value={this.state.username}
              onChange={this.handleChange}
              />
          </div>

          <div className='form-field'>
            <input
              type='password'
              name='password'
              placeholder='Password'
              value={this.state.password}
              onChange={this.handleChange}
              />
          </div>

          <div className='form-field'>
          <input
            name='bio'
            placeholder='Quick bio...'
            value={this.state.bio}
            onChange={this.handleChange}
            />
          </div>

          <div className='form-field'>

          <select name='slant' onChange={this.handleChange}>
            <option selected='true' disabled='true'>Select your political leaning...</option>
            <option name='slant' value={75}>Liberal</option>
            <option name='slant' value={50}>Moderate</option>
            <option name='slant' value={25}>Conservative</option>
          </select>

          </div>
          <div className='form-field'>
            <button className='cute-button' type='submit'>Submit</button>
          </div>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  signUpUser: (userInfo, history) => dispatch(signUpUser(userInfo, history))
})

export default connect(null, mapDispatchToProps)(Signup);
