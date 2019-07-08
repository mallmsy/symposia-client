import React, {Component} from 'react';
import { Form } from 'semantic-ui-react';
import {connect} from 'react-redux';
import { signUpUser } from '../actions/auth';

class Signup extends Component {
  state = {
    username: "",
    password: "",
    img_url: "",
    bio: "",
    slant: 0
  }

  handleChange = (event, selected) => {
    this.setState({
      [event.target.name]: event.target.value,
      slant: selected
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
          <input
            name='img_url'
            placeholder='URL to avataar...'
            value={this.state.img_url}
            onChange={this.handleChange}
            />
          </div>

          <div className='form-field'>
          <Form.Select
            placeholder='Select your political leaning'
            options={this.slantOptions}
            onChange={(event, selected) => this.handleChange(event, selected.value)}
            />
          </div>
          <div className='form-field'>
            <button type='submit'>Submit</button>
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
