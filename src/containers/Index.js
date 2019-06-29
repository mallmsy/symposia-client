import React from 'react';
import { Grid, Image, Segment } from 'semantic-ui-react'

const Index = () => {
  return (
    <Grid stackable columns='equal'>
    <Grid.Row stretched>
      <Grid.Column>
      Column One
        <Segment>1</Segment>
        <Segment>2</Segment>
      </Grid.Column>

      <Grid.Column>
      Column Two
        <Segment>
          <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
        </Segment>
      </Grid.Column>

      <Grid.Column>
      Column Three
        <Segment>1</Segment>
        <Segment>2</Segment>
      </Grid.Column>
    </Grid.Row>

    <Grid.Row>
      <Grid.Column>
      Column One
        <Segment>1</Segment>
        <Segment>2</Segment>
      </Grid.Column>

      <Grid.Column>
      Column Two
        <Segment>
          <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
        </Segment>
      </Grid.Column>
      <Grid.Column>
      Column Three
        <Segment>1</Segment>
        <Segment>2</Segment>
      </Grid.Column>
    </Grid.Row>
  </Grid>
  );
}

export default Index;
