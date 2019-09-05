const BASE_URL = "http://symposia-api.herokuapp.com/"


export function editProfile(formData, userId){
  return function(dispatch){
    let token = localStorage.token

    if (token) {
      return fetch(BASE_URL+`users/${userId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          bio: formData.bio,
          img_url: formData.img_url,
          slant: formData.slant
        })
      })
      .then(res => res.json())
      .then(userObj => dispatch({type: 'EDIT_PROFILE', payload: userObj}))
    }
  }
}
