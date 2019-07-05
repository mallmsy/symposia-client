import React, { PureComponent } from 'react';
import { Feed } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { updateComment } from '../actions/comments';

class Comment extends PureComponent {

  state = {
    editing: false,
    content: this.props.comment.content
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleClick = (e) => {
    this.setState({editing: !this.state.editing})
    if (e.target.innerText === 'save') {
      this.props.updateComment(this.props.comment.id, this.state.content)
    } else {
      return null
    }
  }

  render() {
    console.log(this.state)
    return (
      <Feed.Event>
        <Feed.Label image={this.props.comment.user.img_url} />
        <Feed.Label content={this.props.comment.user.username} />
        <Feed.Content>
        {this.state.editing
        ?
        <input onChange={this.handleChange} type='text' name='content' value={this.state.content}/>
        :
        <Feed.Summary>
          {this.props.comment.content}
        </Feed.Summary>
        }
          <button onClick={this.handleClick}>{this.state.editing ? 'save' : 'edit'}</button>
       </Feed.Content>
     </Feed.Event>
    );
  }

}

const mapDispatchToProps = (dispatch) => ({
  updateComment: (commentId, content) => dispatch(updateComment(commentId, content))
})

export default connect(null, mapDispatchToProps)(Comment);
