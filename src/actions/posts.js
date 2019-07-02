const BASE_URL = "http://localhost:3000/"

export function fetchPosts(){
  return function(dispatch){
    return fetch(BASE_URL+"posts")
    .then(res => res.json())
    .then(posts => {
      return dispatch({type: "FETCH_POSTS", payload: posts})
    })
  }
}

export function fetchNewArticles(){
  return function(dispatch){
    return fetch("http://localhost:3000/fetch")
    .then(res => res.json())
    .then(posts => {
      console.log(posts)
      // return dispatch({type: "LOAD_NEW_POSTS", payload: posts})
    })
  }
}

export function filterPosts(category){
  return function(dispatch){
    return dispatch({type: "FILTER_POSTS", payload: category})
  }
}
