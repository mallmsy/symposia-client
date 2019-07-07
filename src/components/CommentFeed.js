import React, { Component } from 'react';
import Comment from './Comment';
import AddComment from './AddComment';
import { Feed } from 'semantic-ui-react';
// import { ActionCable } from 'react-actioncable-provider'
import { connect } from 'react-redux';
import { updateComment, removeComment, createComment } from '../actions/comments';


class CommentFeed extends Component {

  state = {
    comments: this.props.comments,
    editing: false
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  removeComment = (e, commentId) => {
    const commentsToKeep = this.state.comments.filter(comment => comment.id !== commentId)
    this.props.removeComment(commentId)

    this.setState({comments: commentsToKeep})
  }

  updateComment = (e, comment, content) => {
    if (comment.user.id === this.props.currentUser.id) {
      this.setState({editing: !this.state.editing})
      if (e.target.innerText === 'save') {
        this.props.updateComment(comment.id, content)
        this.setState({editing: false})
      } else {
        return null
      }
    } else {
      return null
    }
  }

  addComment = (e, content) => {
    e.preventDefault()
    let token = localStorage.token
    if (token) {
      return fetch("http://localhost:3000/comments", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          post_id: this.props.postId,
          user_id: this.props.currentUser.id,
          content: content
        })
      })
      .then(res => res.json())
      .then(commentObj => this.setState({comments: [commentObj, ...this.state.comments]}))
    }
  }



  render() {
    return (
      <Feed>
        <AddComment addComment={this.addComment} postId={this.props.postId}/>
        {/*<ActionCable
        channel={{channel: 'CommentsChannel', post_id: this.props.postId, beef: 'steak'}}
        onReceived={this.handleSocketResponse}
        />*/}
        {this.state.comments
          ?
          this.state.comments.map(comment => <Comment key={comment.id} editing={this.state.editing} comment={comment} handleClick={this.updateComment} handleRemove={this.removeComment} />)
          : null}
      </Feed>
    );
  }

}

const mapStateToProps = (state) => ({
  currentUser: state.users.currentUser
})


const mapDispatchToProps = (dispatch) => ({
  updateComment: (commentId, content) => dispatch(updateComment(commentId, content)),
  removeComment: (commentId) => dispatch(removeComment(commentId)),
  // createComment: (content, postId, userId) => dispatch(createComment(content, postId, userId))
})

export default connect(mapStateToProps, mapDispatchToProps)(CommentFeed);
