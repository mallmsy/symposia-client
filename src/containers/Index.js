import React from 'react';
import { Grid, Image, Segment } from 'semantic-ui-react';
import PostContainer from './PostContainer';
import FilterBar from './FilterBar';
import { connect } from 'react-redux';

const Index = ({allPosts}) => {
  return (
    <div>
      <FilterBar />
      <Grid columns='equal' padded>
        <Grid.Column>
          <PostContainer posts={allPosts} />
        </Grid.Column>
        <Grid.Column>
          <PostContainer posts={allPosts} />
        </Grid.Column>
        <Grid.Column>
          <PostContainer posts={allPosts} />
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
