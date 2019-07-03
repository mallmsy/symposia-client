const defaultState = {
  comments: []
}

function commentsReducer (state = defaultState, action) {
  switch (action.type) {

    case "ADD_COMMENT":
      return ({...state, comments: [action.payload, ...state.comments]})

    default:
      return state
  }
}

export default commentsReducer
