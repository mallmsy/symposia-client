const CATEGORIES = ["CLIMATE", "IMMIGRATION", "TWENTY_TWENTY", "NATIONAL+DEBT", "ABORTION", "BORDER"]
const POST_URL = "http://localhost:3000/posts"

export function fetchPosts() {
  return function(dispatch) {
    return fetch(POST_URL)
    .then(res => res.json())
    .then(posts => {
      return dispatch({type: "FETCH_POSTS", payload: posts})
    })
  }
}

export function filterPosts(category) {
  return function(dispatch) {
    return dispatch({type: "FILTER_POSTS", payload: category})
  }
}
