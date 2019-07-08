import React from 'react';
import PostContainer from './PostContainer';
import FilterBar from './FilterBar';
import { connect } from 'react-redux';

const Index = ({allPosts, leftPosts, centerPosts, rightPosts}) => {
  return (
    <div>
      <FilterBar />
      <br/>
      <div className='post-container'>
          <PostContainer column='LIBERAL' posts={leftPosts} />
          <PostContainer column='MODERATE' posts={centerPosts} />
          <PostContainer column='CONSERVATIVE' posts={rightPosts} />
      </div>
    </div>
  )
};

const mapStateToProps = state => {
  return{
    allPosts: state.posts.allPosts,
    leftPosts: state.posts.leftPosts,
    centerPosts: state.posts.centerPosts,
    rightPosts: state.posts.rightPosts
  }
}

export default connect(mapStateToProps)(Index);
