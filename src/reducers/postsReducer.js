const defaultState = {
  allPosts: []
}

function postsReducer (state = defaultState, action) {
  switch (action.type) {
    case "FETCH_POSTS":
      return {...state, allPosts: action.payload}
    default:
      return state
  }
}

export default postsReducer
