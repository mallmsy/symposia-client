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
          <PostContainer posts={allPosts.filter(post => post.slant === "left")} />
        </Grid.Column>
        <Grid.Column>
          <PostContainer posts={allPosts.filter(post => post.slant === "center")} />
        </Grid.Column>
        <Grid.Column>
          <PostContainer posts={allPosts.filter(post => post.slant === "right")} />
        </Grid.Column>
      </Grid>
    </div>
  )
};

const mapStateToProps = state => {
  return{
    allPosts: state.posts.allPosts
  }
}

export default connect(mapStateToProps)(Index);
