import React from 'react';
import Post from '../components/Post';

const PostContainer = ({posts, column}) => {
  return(
    <div className='post-column' >
    <h1>{column}</h1>
      {posts.map(post => <Post key={post.id} post={post}/>)}
    </div>
  )
};


export default PostContainer;
