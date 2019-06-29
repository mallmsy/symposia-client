const defaultState = {
  currentUser: {},
  allLikedPosts: []
}

export default function usersReducer (state = defaultState, action) {
  switch (action.type) {
    case 'LOGIN_USER':
      return {...state, currentUser: action.payload}
    case 'LOGOUT_USER':
      return {...state, currentUser: {} }
    default:
      return state
  }
}
