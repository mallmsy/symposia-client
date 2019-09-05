import React, { Component } from 'react';
import Comment from './Comment';
import AddComment from './AddComment';
import { ActionCable } from 'react-actioncable-provider'
import { connect } from 'react-redux';
import { updateComment, removeComment } from '../actions/comments';

class CommentFeed extends Component {

  state = {
    comments: this.props.comments
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
    this.props.updateComment(comment.id, content)
  }

  addComment = (e, content) => {
    e.preventDefault()
    if (content === "") {
      alert("comment can't be blank!")
    } else {
        let token = localStorage.token
        if (token) {
          return fetch("https://symposia-api.herokuapp.com/comments", {
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
        }
    }
  }

  handleSocketResponse = data => {
    switch(data.type) {
      case 'ADD_COMMENT':
        console.log("socket response add comment", data.payload)
        this.setState({ comments: [data.payload, ...this.state.comments] })
        break;
      case 'REMOVE_COMMENT':
        this.removeComment(null, data.payload.id)
        break;
      default:
        console.log("inside socket response", data)
    }
  }

  render() {
    return (
      <div>
        <AddComment
        addComment={this.addComment}
        postId={this.props.postId}/>

        <br/>

        <ActionCable
        channel={{channel: 'CommentsChannel', post_id: this.props.postId}}
        onReceived={this.handleSocketResponse}
        />
        <div className='comment-feed'>
        {this.state.comments
          ?
          this.state.comments.map(comment =>
            <Comment
            key={comment.id}
            comment={comment}
            updateComment={this.updateComment}
            handleRemove={this.removeComment} />)

            : null}
        </div>
      </div>
    );
  }

}

const mapStateToProps = (state) => ({
  currentUser: state.users.currentUser
})

const mapDispatchToProps = (dispatch) => ({
  updateComment: (commentId, content) => dispatch(updateComment(commentId, content)),
  removeComment: (commentId) => dispatch(removeComment(commentId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(CommentFeed);
