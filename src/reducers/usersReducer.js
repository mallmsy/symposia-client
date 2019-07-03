const defaultState = {
  currentUser: {},
  likedPostIds: [],
  userSlant: 0
}

export default function usersReducer (state = defaultState, action) {
  switch (action.type) {

    case 'LOGIN_USER':
      return {...state, currentUser: action.payload, userSlant: action.payload.slant, likedPostIds: action.payload.likes.map(post => post.post_id)}

    case 'LOGOUT_USER':
      return {...state, currentUser: {} }

    case 'ADJUST_SLANT':
      let slantIndex;
      if (action.payload.slant === "left") {
        slantIndex = state.userSlant + 5
      } else if (action.payload.slant === "right") {
        slantIndex = state.userSlant - 5
      } else {
        slantIndex = state.userSlant
      }
      return {...state,
        userSlant: slantIndex,
        likedPostIds: [...state.likedPostIds, action.payload.id]}

    case 'EDIT_PROFILE':
      return {...state, currentUser: action.payload, userSlant: action.payload.slant}

    default:
      return state
  }
}
