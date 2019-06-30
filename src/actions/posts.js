const API_KEY = "cba4b9a885984bc49ddefc159d1fbb23"
const ALL_SOURCES = ["cnn","the-new-york-times","cbs-news","bbc-news","al-jazeera-english","the-wall-street-journal","fox-news","breitbart-news","national-review"]
const LEFT_SOURCES = ["cnn","the-new-york-times","cbs-news"]
const CENTER_SOURCES = ["bbc-news","al-jazeera-english","the-wall-street-journal"]
const RIGHT_SOURCES = ["fox-news","breitbart-news","national-review"]
const CATEGORIES = ["CLIMATE", "IMMIGRATION", "TWENTY_TWENTY", "NATIONAL+DEBT", "ABORTION", "BORDER" ]

export function fetchPosts() {
  return function(dispatch) {
    return fetch(`https://newsapi.org/v2/everything?sources=${ALL_SOURCES}&pageSize=10&apiKey=${API_KEY}`)
    .then(res => res.json())
    .then(posts => {
      return dispatch({type: "FETCH_POSTS", payload: posts.articles})
    })
  }
}
