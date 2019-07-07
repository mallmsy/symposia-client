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
          leftPosts: action.payload.filter(post => post.slant === "left"),
          rightPosts: action.payload.filter(post => post.slant === "right"),
          centerPosts: action.payload.filter(post => post.slant === "center")
        })

    case "FILTER_POSTS":
      let newState = {...state}
      let filtered;

      if (action.payload === "NONE") {
        filtered = newState.allPosts
      } else {
        filtered  = newState.allPosts.filter(post => post.topic === action.payload.toUpperCase())
      }
      return ({...state,
        leftPosts: filtered.filter(post => post.slant === "left"),
        rightPosts: filtered.filter(post => post.slant === "right"),
        centerPosts: filtered.filter(post => post.slant === "center")
      })

    case "LOAD_NEW_POSTS":
      if (action.payload.length === 0) {
        alert("You're up to date! No new articles.")
        return state
      } else {
        let filteredLeftPosts = action.payload.filter(post => post.slant === "left")
        let filteredRightPosts = action.payload.filter(post => post.slant === "right")
        let filteredCenterPosts = action.payload.filter(post => post.slant === "center")
        let newState = {
          allPosts: [...state.allPosts, ...action.payload],
          leftPosts: [...state.leftPosts, ...filteredLeftPosts],
          rightPosts: [...state.rightPosts, ...filteredRightPosts],
          centerPosts: [...state.centerPosts, ...filteredCenterPosts]
        }
        return (newState)
      }

    default:
      return state
  }
}

export default postsReducer
