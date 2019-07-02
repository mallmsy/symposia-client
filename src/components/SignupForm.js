import React, {Component} from 'react';
import { Button, Form } from 'semantic-ui-react';
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
      <div style={{align: "center", width: "300px"}}>
        <Form onSubmit={this.handleSubmit}>
          <h1>Sign Up</h1>
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

          <Form.Field>
          <label>Bio</label>
          <input
            name='bio'
            placeholder='Share a bit about yourself...'
            value={this.state.bio}
            onChange={this.handleChange}
            /><br/>
          </Form.Field>

          <Form.Field>
          <label>Image</label>
          <input
            name='img_url'
            placeholder='Link to an avatar / image...'
            value={this.state.img_url}
            onChange={this.handleChange}
            /><br/>
          </Form.Field>

          <Form.Field>
          <label>Political Leaning</label>
          <Form.Select
            placeholder='Select your political leaning'
            options={this.slantOptions}
            onChange={(event, selected) => this.handleChange(event, selected.value)}
            /><br/>
          </Form.Field>

          <Button type='submit'>Submit</Button>
        </Form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  signUpUser: (userInfo, history) => dispatch(signUpUser(userInfo, history))
})

export default connect(null, mapDispatchToProps)(Signup);
