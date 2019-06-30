import React from 'react';
import Post from '../components/Post';

const PostContainer = ({posts}) => {
  return(
    <div>
      {posts.map(post => <Post post={post}/>)}
    </div>
  )
};


export default PostContainer;
