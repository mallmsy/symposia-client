import React from 'react';
import { Grid } from 'semantic-ui-react';
import PostContainer from './PostContainer';
import FilterBar from './FilterBar';
import { connect } from 'react-redux';

const Index = ({allPosts, leftPosts, centerPosts, rightPosts}) => {
  return (
    <div>
      <FilterBar />
      <br/>
      <Grid columns='equal' padded>
        <Grid.Column>
          <PostContainer posts={leftPosts} />
        </Grid.Column>
        <Grid.Column>
          <PostContainer posts={centerPosts} />
        </Grid.Column>
        <Grid.Column>
          <PostContainer posts={rightPosts} />
        </Grid.Column>
      </Grid>
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
