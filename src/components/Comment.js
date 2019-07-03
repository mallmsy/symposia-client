import React, { PureComponent } from 'react';
import { Feed } from 'semantic-ui-react';

class Comment extends PureComponent {

  render() {
    return (
      <Feed.Event>
        <Feed.Label image='./favicon.ico' />
        <Feed.Label content='Username' />
        <Feed.Content>
          <Feed.Summary>
            This is a comment about a post.
          </Feed.Summary>
       </Feed.Content>
     </Feed.Event>
    );
  }

}

export default Comment;
