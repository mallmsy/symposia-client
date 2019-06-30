import React from 'react';
import { Grid, Image, Segment } from 'semantic-ui-react';
import PostContainer from './PostContainer';
import { connect } from 'react-redux';

const Index = ({allPosts}) => {
  return (
    <div>
      <PostContainer posts={allPosts} />
    </div>
  )
};

const mapStateToProps = state => {
  return{
    allPosts: state.posts.allPosts
  }
}

export default connect(mapStateToProps)(Index);
