import { combineReducers } from 'redux';
import usersReducer from './usersReducer'
import postsReducer  from './postsReducer'
import likesReducer from './likesReducer'
import commentsReducer from './commentsReducer'

export default combineReducers({
  users: usersReducer,
  posts: postsReducer,
  likes: likesReducer,
  comments: commentsReducer
})
