import React, { Component } from 'react';
import Comment from './Comment';
import AddComment from './AddComment';
import { Feed } from 'semantic-ui-react';


class CommentFeed extends Component {

  render() {
    return (
      <Feed>
        <AddComment postId={this.props.postId}/>
        <Comment />
      </Feed>
    );
  }

}

export default CommentFeed;
