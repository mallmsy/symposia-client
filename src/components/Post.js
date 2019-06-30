import React from 'react';
import { Card, Image, Feed } from 'semantic-ui-react'
import CommentFeed from './CommentFeed'

class Post extends React.Component {
  render() {
    return(
      <Card fluid>
        <Image src={this.props.post.urlToImage} href={this.props.post.url}/>
        <Card.Header>{this.props.post.title}</Card.Header>
        <Card.Description>{this.props.post.source.name}</Card.Description>
        <Card.Description>{this.props.post.author}</Card.Description>
        <Card.Content>{this.props.post.content}</Card.Content>
        {/*<CommentFeed />*/}
      </Card>
    )
  }
}

export default Post
