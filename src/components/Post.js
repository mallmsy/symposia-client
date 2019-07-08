import React from 'react';
import CommentFeed from './CommentFeed';
import { connect } from 'react-redux';
import { addLike } from '../actions/likes'

class Post extends React.Component {

  state = {
    likes: this.props.post.likes && this.props.post.likes.length,
    disabled: false
  }

  handleClick = () => {
      if (this.props.userSlant >= 1 && this.props.userSlant <= 99) {
        this.props.addLike(this.props.post.id, this.props.currentUser.id)
        this.setState({likes: this.state.likes + 1, disabled: true})
      } else {
        this.setState({disabled: true})
      }
  }

  render() {
    const postComments = this.props.allComments.filter(comment => comment.post_id === this.props.post.id)
    // console.log("comments inside post render", postComments)

    return(
      <div className='post-outter-div'>
        <div className='post'>
        <a href={this.props.post.link} target='_blank'>
          <img className='post-image' src={this.props.post.img_url ? this.props.post.img_url : '../post_placeholder_img.jpg' }/>
        </a>
          <h3>{this.props.post.title}</h3>
          <h4>{this.props.post.source}</h4>
          <h4>{this.props.post.publish_date}</h4>
          <p>{this.props.post.content}</p>
          <button
          onClick={this.handleClick}
          className='like-button'
          disabled={this.props.likedPostIds.includes(this.props.post.id) ? true : this.state.disabled}
          >
          LIKES: {this.state.likes}
          </button>
          <CommentFeed comments={postComments} postId={this.props.post.id}/>
        </div>
      </div>
    )
  }
}


const mapStateToProps = (state) => ({
  currentUser: state.users.currentUser,
  userSlant: state.users.userSlant,
  likedPostIds: state.users.likedPostIds,
  allComments: state.comments.allComments
})

const mapDispatchToProps = (dispatch) => ({
  addLike: (postId, userId) => dispatch(addLike(postId, userId))
})

export default connect(mapStateToProps, mapDispatchToProps)(Post);
