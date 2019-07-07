const BASE_URL = "http://localhost:3000/comments"

export function fetchComments(){
    return function(dispatch){
      return fetch(BASE_URL)
      .then(res => res.json())
      .then(commentObj => dispatch({type: "LOAD_COMMENTS", payload: commentObj}))
    }
}

export function updateComment(commentId, content){
  return function(dispatch){
    let token = localStorage.token
    if(token){
      return fetch(BASE_URL+`/${commentId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          content: content
        })
      })
    }
  }
}

export function removeComment(commentId){
  return function(dispatch){
    let token = localStorage.token
    if(token){
      return fetch(BASE_URL+`/${commentId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      })
      .then(res => res.json())
      .then(data => dispatch({type: 'REMOVE_COMMENT', payload: commentId}))
    }
  }
}


export function createComment(content, postId, userId){
  return function(dispatch){
    let token = localStorage.token
    if (token) {
      return fetch(BASE_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          post_id: postId,
          user_id: userId,
          content: content.content
        })
      })
      .then(res => res.json())
      .then(commentObj => dispatch({type: 'ADD_COMMENT', payload: commentObj}))
    }
  }
}
