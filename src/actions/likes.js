const BASE_URL = "http://localhost:3000/"

export function addLike(postId, userId) {
  return function(dispatch) {
    const bodyData = {post_id: postId, user_id: userId}
    console.log("inside likes action", postId, userId)
    return fetch(BASE_URL+"likes", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${localStorage.token}`
      },
      body: JSON.stringify({like: {post_id: postId, user_id: userId}})
    })
  }
}


export function fetchPosts(){
  return function(dispatch){
    return fetch(BASE_URL+"posts")
    .then(res => res.json())
    .then(posts => {
      return dispatch({type: "FETCH_POSTS", payload: posts})
    })
  }
}
