import React, { Component } from 'react';
import { Modal } from 'semantic-ui-react';
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
        trigger={<button className='cute-button' onClick={this.handleOpen}>edit profile</button>}
        dimmer='inverted'
        open={this.state.modalOpen}
        onClose={this.handleClose}
        size='small'
      >
      <div className='form' id='profile'>
        <form onSubmit={this.handleSubmit}>
          <h2>{this.props.currentUser.username}</h2>
          <Modal.Content>
          <div className='form-field'>
            <h3>Bio</h3>
            <input onChange={this.handleChange} type='text' placeholder='bio' name='bio' value={this.state.bio}/>
          </div>
          <div className='form-field'>
            <h3>Image URL</h3>
            <input onChange={this.handleChange} type='text' placeholder='image URL' name='img_url' value={this.state.img_url}/>
            </div>
            <div className='form-field'>
              <h3>Political Slant</h3>
              <select name='slant' onChange={this.handleChange}>
                <option name='slant' value={75}>Left</option>
                <option name='slant' value={50}>Center</option>
                <option name='slant' value={25}>Right</option>
              </select>
            </div>
            <div className='form-field'>
              <button className='cute-button' onClick={this.handleSubmit}>SUBMIT</button>
            </div>
          </Modal.Content>
          </form>
        </div>
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
