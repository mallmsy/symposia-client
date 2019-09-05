const BASE_URL = 'https://symposia-api.herokuapp.com/'

export function addLike(postId, userId) {
  return function(dispatch) {
    return fetch(BASE_URL+'likes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${localStorage.token}`
      },
      body: JSON.stringify({like: {post_id: postId, user_id: userId}})
    })
    .then(res => res.json())
    .then(data => dispatch({type: 'ADJUST_SLANT', payload: data.post}))
  }
}
