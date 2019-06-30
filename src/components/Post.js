import React from 'react';

class Post extends React.Component {
  render() {
    return(
      <div>
        {this.props.post.title}
      </div>
    )
  }
}

export default Post
