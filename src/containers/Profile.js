import React from 'react';
import { connect } from 'react-redux';
import { Grid, Image, Feed, Modal } from 'semantic-ui-react'
import LikedPost from '../components/LikedPost'
import ProfileEdit from './ProfileEdit'

const Profile = ({history, currentUser, userSlant, likedPostIds, allPosts, editProfile}) => {
  let likedPosts = allPosts.filter(post => likedPostIds.includes(post.id))
  let showPosts = likedPosts.slice(likedPosts.length -3, likedPosts.length)

  return (

    <Grid divided='vertically'>
      <Grid.Row className='profile-header' columns={2}>
        <Grid.Column>
          <Image centered src={currentUser.img_url} />
          <h1>{currentUser.username}</h1>
          <p>{currentUser.bio}</p>
          <p>User Slant: {userSlant}</p>
          <ProfileEdit />
        </Grid.Column>
        <Grid.Column>
        Recently Liked Posts
          <Feed>
          {showPosts.map(post => <LikedPost post={post} />)}
          </Feed>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

const mapStateToProps = (state) => ({
  currentUser: state.users.currentUser,
  userSlant: state.users.userSlant,
  likedPostIds: state.users.likedPostIds,
  allPosts: state.posts.allPosts
})

export default connect(mapStateToProps)(Profile);
