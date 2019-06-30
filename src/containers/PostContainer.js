import React from 'react';
import Post from '../components/Post';
import { Segment } from 'semantic-ui-react';

const PostContainer = ({posts}) => {
  return(
    <Segment.Group>
      {posts.map(post => <Post post={post}/>)}
    </Segment.Group>
  )
};


export default PostContainer;
