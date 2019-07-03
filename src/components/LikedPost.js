import React from 'react';
import { Feed } from 'semantic-ui-react';

const LikedPost = ({post}) => {
  return (
    <Feed.Event>
      <Feed.Label image={post.img_url} />
      <Feed.Content>
        <Feed.Label content={post.source} />
        <Feed.Summary>
          {post.title}
        </Feed.Summary>
        <Feed.Label content={post.publish_date}/>
     </Feed.Content>
   </Feed.Event>
  );
}

export default LikedPost;
