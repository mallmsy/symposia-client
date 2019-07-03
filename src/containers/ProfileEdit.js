import React, { Component } from 'react';
import { Button, Header, Modal } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { editProfile } from '../actions/users'

class ProfileEdit extends Component {
  state = {
    modalOpen: false,
    bio: this.props.currentUser.bio,
    img_url: this.props.currentUser.img_url,
    slant: this.props.currentUser.slant
  }

  handleOpen = () => this.setState({ modalOpen: true })

  handleClose = () => this.setState({ modalOpen: false })

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = () => {
    this.handleClose()
    this.props.editProfile(this.state, this.props.currentUser.id)
  }

  render() {
    return (
      <Modal
        trigger={<Button onClick={this.handleOpen}>Edit Profile</Button>}
        dimmer='inverted'
        open={this.state.modalOpen}
        onClose={this.handleClose}
        size='small'
      >
        <Header content='Edit Profile' />
        <Modal.Content>
        <h3>{this.props.currentUser.username}</h3>
          <label>Bio</label>
          <input onChange={this.handleChange} type='text' placeholder='bio' name='bio' value={this.state.bio}/>
          <br/>
          <label>Image URL</label>
          <input onChange={this.handleChange} type='text' placeholder='image URL' name='img_url' value={this.state.img_url}/>
          <br/>
          <label>Political Slant</label>
          <select name='slant' onChange={this.handleChange}>
            <option name='slant' value={75}>Left</option>
            <option name='slant' value={50}>Center</option>
            <option name='slant' value={25}>Right</option>
          </select>
        </Modal.Content>
        <Modal.Actions>
          <Button color='green' onClick={this.handleSubmit} inverted>SUBMIT
          </Button>
        </Modal.Actions>
      </Modal>
    )
  }
}

const mapStateToProps = state => ({
  currentUser: state.users.currentUser
})

const mapDispatchToProps = (dispatch) => ({
  editProfile: (formData, userId) => dispatch(editProfile(formData, userId))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProfileEdit);
