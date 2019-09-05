const BASE_URL = "http://symposia-api.herokuapp.com/comments"

export function fetchComments(){
    return function(dispatch){
      return fetch(BASE_URL)
      .then(res => res.json())
      .then(commentObj => dispatch({type: "LOAD_COMMENTS", payload: commentObj}))
    }
}

export function updateComment(commentId, content){
  return function(dispatch){
    if (content === "") {
      alert("comment can't be blank!")
    }
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
