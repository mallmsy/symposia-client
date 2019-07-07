import React from 'react';
import { Feed } from 'semantic-ui-react';
import { connect } from 'react-redux';

class Comment extends React.Component {

  state = {
    content: this.props.comment.content
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }



  render() {
    return (
      <Feed.Event>
        <Feed.Label image={this.props.comment.user.img_url} />
        <Feed.Label content={this.props.comment.user.username} />
        <Feed.Content>
        {this.props.editing
        ?
        <input onChange={this.handleChange} type='text' name='content' value={this.state.content}/>
        :
        <Feed.Summary>
          {this.state.content}
        </Feed.Summary>
        }
        { this.props.comment.user.id === this.props.currentUser.id
          ?
          <>
            <button onClick={(e) => this.props.handleClick(e, this.props.comment, this.state.content)}>{this.props.editing ? 'save' : 'edit'}</button>
            <button onClick={(e) => this.props.handleRemove(e, this.props.comment.id)}>delete</button>
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
