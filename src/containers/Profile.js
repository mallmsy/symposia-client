import React from 'react';
import { connect } from 'react-redux';
import LikedPost from '../components/LikedPost'
import ProfileEdit from './ProfileEdit'

const Profile = ({history, currentUser, userSlant, likedPostIds, allPosts, editProfile}) => {
  let likedPosts = allPosts.filter(post => likedPostIds.includes(post.id))
  let sortedPosts = likedPosts.sort((a,b) => a.publish_date > b.publish_date ? 1 : -1)
  let showPosts = sortedPosts.slice(likedPosts.length -3, likedPosts.length)

  return (
    <div className='profile-header'>
      <div className='post-container'>
          <div className='post-column'>
            <img id='profile-avatar' src={currentUser.img_url} alt={currentUser.username} />
            <h1>{currentUser.username}</h1>
            <p>{currentUser.bio}</p>
            <ProfileEdit />
          </div>

          <div className='post-column'>
          <h2>Recently Liked Posts</h2>
            <div>
            {showPosts.map(post => <LikedPost post={post} />)}
            </div>
          </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  currentUser: state.users.currentUser,
  userSlant: state.users.userSlant,
  likedPostIds: state.users.likedPostIds,
  allPosts: state.posts.allPosts
})

export default connect(mapStateToProps)(Profile);
