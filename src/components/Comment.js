import React from 'react';
import { Feed } from 'semantic-ui-react';
import { connect } from 'react-redux';

class Comment extends React.Component {

  state = {
    user: this.props.comment.user ? this.props.comment.user : null,
    content: this.props.comment.content,
    editing: false
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleClick = (e) => {
    this.setState({editing: !this.state.editing})
    if (e.target.innerText === 'save') {
      this.props.updateComment(e, this.props.comment, this.state.content)
    } else {
      return null
    }
  }


  render() {
    return (
      <Feed.Event className='comment'>
        <Feed.Label image={this.state.user.img_url} />
        <br/>
        <Feed.Label content={this.state.user.username} />
        <Feed.Content>
        <br/>
        {this.state.editing
        ?
        <input onChange={this.handleChange} type='text' name='content' value={this.state.content}/>
        :
        <Feed.Summary>
          {this.state.content}
        </Feed.Summary>
        }
        { this.state.user.id === this.props.currentUser.id
          ?
          <>
            <button className='cute-button' onClick={this.handleClick}>{this.state.editing ? 'save' : 'edit'}</button>
            <button className='cute-button' onClick={(e) => this.props.handleRemove(e, this.props.comment.id)}>delete</button>
          </>
          :
          null
        }
       </Feed.Content>
     </Feed.Event>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.users.currentUser
})

export default connect(mapStateToProps)(Comment);
