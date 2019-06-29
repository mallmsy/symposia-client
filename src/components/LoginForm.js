import React, {Component} from 'react';
import { Button, Form } from 'semantic-ui-react';
import {connect} from 'react-redux';
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
      <div style={{align: "center", width: "300px"}}>
        <Form onSubmit={this.handleSubmit}>
          <h1>LOGIN</h1>
          <Form.Field>
            <label>Username</label>
            <input
              name='username'
              placeholder='Username'
              value={this.state.username}
              onChange={this.handleChange}
              /><br/>
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input
              type='password'
              name='password'
              placeholder='Password'
              value={this.state.password}
              onChange={this.handleChange}
              /><br/>
          </Form.Field>

          <Button type='submit'>SUBMIT</Button>
        </Form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  loginUser: (userInfo, history) => dispatch(loginUser(userInfo, history))
})

export default connect(null, mapDispatchToProps)(Signup);
