import React from 'react';
import { Card, Image, Feed, Button } from 'semantic-ui-react';
import CommentFeed from './CommentFeed';
import { connect } from 'react-redux';
import { addLike } from '../actions/likes'

class Post extends React.Component {

  state = {
    likes: this.props.post.likes.length
  }

  handleClick = () => {
      this.props.addLike(this.props.post.id, this.props.currentUser.id)
      this.setState({likes: this.state.likes + 1})
  }

  render() {
    return(
      <Card fluid>
        <Image src={this.props.post.img_url} href={this.props.post.link}/>
        <Card.Header>{this.props.post.title}</Card.Header>
        <Card.Description>{this.props.post.source}</Card.Description>
        <Card.Description>{this.props.post.author}</Card.Description>
        <Card.Content>{this.props.post.content}</Card.Content>
        <Button
         content='Like'
         icon='heart'
         label={{ as: 'a', basic: true, content: this.state.likes}}
         labelPosition='right'
         onClick={this.handleClick}
       />
        {/*<CommentFeed />*/}
      </Card>
    )
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.users.currentUser
})

const mapDispatchToProps = (dispatch) => ({
  addLike: (postId, userId) => dispatch(addLike(postId, userId))
})

export default connect(mapStateToProps, mapDispatchToProps)(Post);
