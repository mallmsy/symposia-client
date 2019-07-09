import React from 'react';
import Post from '../components/Post';
import { connect } from 'react-redux';


const PostContainer = ({likedPostIds, posts, column}) => {
  return(
    <div className='post-column' >
    <h1>{column}</h1>
      {posts.map(post => {
        const isDisabled = likedPostIds.includes(post.id)
        return <Post key={post.id} isDisabled={isDisabled} post={post}/>
      })}
    </div>
  )
};

const mapStateToProps = (state) => ({
  likedPostIds: state.users.likedPostIds
})

export default connect(mapStateToProps)(PostContainer);
