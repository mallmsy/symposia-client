const defaultState = {
  allPosts: [],
  leftPosts: [],
  centerPosts: [],
  rightPosts: []
}

function postsReducer (state = defaultState, action) {
  switch (action.type) {
    case "FETCH_POSTS":
      return ({...state,
          allPosts: action.payload,
          leftPosts: action.payload.filter(post => post.slant === "left").sort((a,b) => a.publish_date > b.publish_date ? -1 : 1),
          rightPosts: action.payload.filter(post => post.slant === "right").sort((a,b) => a.publish_date > b.publish_date ? -1 : 1),
          centerPosts: action.payload.filter(post => post.slant === "center").sort((a,b) => a.publish_date > b.publish_date ? -1 : 1)
        })
      case "FILTER_POSTS":
        let newState = {...state}
        let filtered  = newState.allPosts.filter(post => post.topic === action.payload.toUpperCase())
        return ({...state,
          leftPosts: filtered.filter(post => post.slant === "left").sort((a,b) => a.publish_date > b.publish_date ? -1 : 1),
          rightPosts: filtered.filter(post => post.slant === "right").sort((a,b) => a.publish_date > b.publish_date ? -1 : 1),
          centerPosts: filtered.filter(post => post.slant === "center").sort((a,b) => a.publish_date > b.publish_date ? -1 : 1)
        })

    case "LOAD_NEW_POSTS":
      return {...state, allPosts: [action.payload, ...state.allPosts]}

    default:
      return state
  }
}

export default postsReducer
