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
      <Grid columns='equal' padded stackable>
        <Grid.Column>
          <h1>LIBERAL</h1>
          <PostContainer posts={leftPosts} />
        </Grid.Column>
        <Grid.Column>
          <h1>MODERATE</h1>
          <PostContainer posts={centerPosts} />
        </Grid.Column>
        <Grid.Column>
          <h1>CONSERVATIVE</h1>
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
