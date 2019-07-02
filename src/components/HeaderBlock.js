import React from 'react';
import { Header, Segment } from 'semantic-ui-react'

const HeaderBlock = () => {
  return (
    <div>
      <Header as='h1' attached='top' textAlign='left'>
        Symposia
      </Header>
      <Segment attached >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat.
      </Segment>
    </div>
  );
}

export default HeaderBlock;
