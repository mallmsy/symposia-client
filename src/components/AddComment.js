import React from 'react';
import { connect } from 'react-redux';
import { createComment } from '../actions/comments'

class AddComment extends React.Component {
  state = {
    content: ""
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e, content) => {
    this.props.addComment(e, content)
    this.setState({content: ''})
  }


  render() {
    return (
      <form className='comment-form' onSubmit={(e) => this.handleSubmit(e, this.state.content)}>
        <label>Add Comment:</label>
        <input onChange={this.handleChange} name='content' value={this.state.content} type='text'/>
        <input type='submit'/>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.users.currentUser
})

export default connect(mapStateToProps)(AddComment);
