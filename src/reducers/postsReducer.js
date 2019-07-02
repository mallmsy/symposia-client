const defaultState = {
  allPosts: []
}

function postsReducer (state = defaultState, action) {
  switch (action.type) {
    case "FETCH_POSTS":
      return (
        {...state,
          allPosts: action.payload
        }
      )
    case "FILTER_POSTS":
      let newState = {...state}
      let filtered  = newState.allPosts.filter(post => post.topic === action.payload.toUpperCase())
      return {...state,
        allPosts: filtered
      }

    case "LOAD_NEW_POSTS":
      return {...state, allPosts: [action.payload, ...state.allPosts]}

    default:
      return state
  }
}

export default postsReducer
