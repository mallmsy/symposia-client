import React from 'react';
import { connect } from 'react-redux';
import { Grid, Image } from 'semantic-ui-react'

const Profile = ({history, currentUser, userSlant, likedPostIds}) => {
  return (
    <Grid divided='vertically'>
      <Grid.Row className='profile-header' columns={2}>
        <Grid.Column>
          <Image centered src={currentUser.img_url} />
          <h1>{currentUser.username}</h1>
          <p>{currentUser.bio}</p>
          <p>User Slant: {userSlant}</p>
        </Grid.Column>
        <Grid.Column>
          <br/>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}


const mapStateToProps = (state) => ({
  currentUser: state.users.currentUser,
  userSlant: state.users.userSlant,
  likedPostIds: state.users.likedPostIds
})

export default connect(mapStateToProps)(Profile);
