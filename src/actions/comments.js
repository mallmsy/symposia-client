const BASE_URL = "http://localhost:3000/"


export function createComment(content, postId, userId){
  return function(dispatch){
    let token = localStorage.token
    if (token) {
      return fetch(BASE_URL+'comments', {
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
