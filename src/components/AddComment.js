import React from 'react';
import { connect } from 'react-redux';

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
    this.props.addComment(e, this.state.content)
    this.setState({content: ''})
  }


  render() {
    return (
      <form className='comment-form' onSubmit={(e) => this.handleSubmit(e, this.state.content)}>
        <p>Add Comment:</p>
        <input onChange={this.handleChange} name='content' value={this.state.content} type='text'/>
        <button className='cute-button' onClick={this.handleSubmit}>add</button>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.users.currentUser
})

export default connect(mapStateToProps)(AddComment);
