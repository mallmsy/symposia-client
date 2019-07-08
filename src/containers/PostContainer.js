import React from 'react';
import Post from '../components/Post';
// import { Segment } from 'semantic-ui-react';

const PostContainer = ({posts}) => {
  return(
    <div className='post-container'>
      {posts.map(post => <Post key={post.id} post={post}/>)}
    </div>
  )
};


export default PostContainer;
