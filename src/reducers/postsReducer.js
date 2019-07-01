const defaultState = {
  allPosts: [],
  leftPosts: [],
  centerPosts: [],
  rightPosts: []
}

function postsReducer (state = defaultState, action) {
  switch (action.type) {
    case "FETCH_POSTS":
      return (
        {...state,
          allPosts: action.payload,
          leftPosts: action.payload.filter(post => post.slant === "left"),
          rightPosts: action.payload.filter(post => post.slant === "right"),
          centerPosts: action.payload.filter(post => post.slant === "center")
        }
      )
    case "FILTER_POSTS":
      let newState = {...state}
      let filtered  = newState.allPosts.filter(post => post.topic === action.payload.toUpperCase())
      return {...state,
        leftPosts: filtered.filter(post => post.slant === "left"),
        rightPosts: filtered.filter(post => post.slant === "right"),
        centerPosts: filtered.filter(post => post.slant === "center")
      }

    case "LOAD_NEW_POSTS":
      return {...state, allPosts: [action.payload, ...state.allPosts]}
    default:
      return state
  }
}

export default postsReducer
