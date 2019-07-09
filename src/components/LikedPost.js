import React from 'react';

const LikedPost = ({post}) => {
  return (
    <div className='liked-feed-item'>
      <img className='feed-image' src={post.img_url} alt={post.title}/>
      <h3>{post.title}</h3>
      <p>{post.source}</p>
   </div>
  );
}

export default LikedPost;
