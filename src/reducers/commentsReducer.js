const defaultState = {
  allComments: []
}

function commentsReducer (state = defaultState, action) {
  let newState;

  switch (action.type) {
    case "LOAD_COMMENTS":
      return {...state, allComments: action.payload}

    case "ADD_COMMENT":
      newState = {...state}
      newState.allComments = [action.payload, ...newState.allComments]
      return newState

    case "REMOVE_COMMENT":
      newState = {...state}
      let commentsToKeep = state.allComments.filter(comment => comment.id !== action.payload)
      newState.allComments = commentsToKeep
      return newState

    default:
      return state
  }
}

export default commentsReducer
