import React from 'react';
import { connect } from 'react-redux';
import { Grid, Image } from 'semantic-ui-react'

const Profile = ({history, currentUser}) => {
  return (
    <Grid divided='vertically'>
      <Grid.Row columns={2}>
        <Grid.Column>
          <Image centered src={currentUser.img_url} />
          <h1>{currentUser.username}</h1>
          <p>{currentUser.bio}</p>
        </Grid.Column>
        <Grid.Column>
          <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
        </Grid.Column>
      </Grid.Row>

      <Grid.Row columns={3}>
        <Grid.Column>
          <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
        </Grid.Column>
        <Grid.Column>
          <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
        </Grid.Column>
        <Grid.Column>
          <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

const mapStateToProps = (state) => ({
  currentUser: state.users.currentUser
})

export default connect(mapStateToProps)(Profile);
