import React, { PureComponent } from 'react';
import { Feed } from 'semantic-ui-react';

class Comment extends PureComponent {

  render() {
    return (
      <Feed.Event>
        <Feed.Label image='./favicon.ico' />
        <Feed.Content>
          <Feed.Date content='1 day ago' />
          <Feed.Summary>
            You added Jenny Hess to your group.
          </Feed.Summary>
       </Feed.Content>
     </Feed.Event>
    );
  }

}

export default Comment;
