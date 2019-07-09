import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../actions/auth';

class Signup extends Component {
  state = {
    username: "",
    password: ""
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.loginUser(this.state, this.props.history)
    this.setState({username: "", password: ""})
  }

  render() {
    return(
      <div className='form' id='login'>
        <form onSubmit={this.handleSubmit}>
          <h1>LOGIN</h1>
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
            <button className='cute-button' type='submit'>SUBMIT</button>
          </div>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  loginUser: (userInfo, history) => dispatch(loginUser(userInfo, history))
})

export default connect(null, mapDispatchToProps)(Signup);
