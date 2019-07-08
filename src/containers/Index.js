import React from 'react';
import PostContainer from './PostContainer';
import FilterBar from './FilterBar';
import { connect } from 'react-redux';

const Index = ({allPosts, leftPosts, centerPosts, rightPosts}) => {
  return (
    <div className='index'>
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
    leftPosts: state.posts.leftPosts.sort((a,b) => a.publish_date > b.publish_date ? -1 : 1),
    centerPosts: state.posts.centerPosts.sort((a,b) => a.publish_date > b.publish_date ? -1 : 1),
    rightPosts: state.posts.rightPosts.sort((a,b) => a.publish_date > b.publish_date ? -1 : 1)
  }
}

export default connect(mapStateToProps)(Index);
