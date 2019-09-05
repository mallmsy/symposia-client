const BASE_URL = "https://symposia-api.herokuapp.com/"

export function fetchPosts(){
  return function(dispatch){
    return fetch(BASE_URL+"posts")
    .then(res => res.json())
    .then(posts => {
      return (dispatch({type: "FETCH_POSTS", payload: posts}))
    })
  }
}

export function fetchNewArticles(){
  return function(dispatch){
    const token = localStorage.token;
    if (token) {
      return fetch(BASE_URL + "fetch", {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      .then(res => res.json())
      .then(posts => {
        return dispatch({type: "LOAD_NEW_POSTS", payload: posts.posts})
      })
    }
  }
}

export function filterPosts(category){
  return function(dispatch){
    return dispatch({type: "FILTER_POSTS", payload: category})
  }
}
