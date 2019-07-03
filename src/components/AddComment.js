import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { createComment } from '../actions/comments'

class AddComment extends PureComponent {
  state = {
    content: ""
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = () => {
    console.log("submitted")
    this.props.createComment(this.state, this.props.postId, this.props.currentUser.id)
    this.setState({
      content: ""
    })
  }

  render() {
    return (
      <div>
        <label>Add Comment:</label>
        <input onChange={this.handleChange} name='content' value={this.state.content} type='text'/>
        <input type='submit' onClick={this.handleSubmit}/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.users.currentUser
})

const mapDispatchToProps = dispatch => ({
  createComment: (content, postId, userId) => dispatch(createComment(content, postId, userId))
})

export default connect(mapStateToProps, mapDispatchToProps)(AddComment);
