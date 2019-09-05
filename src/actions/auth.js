export function signUpUser (user, history) {
  let finalNum;
  const num = Math.floor(Math.random() * 36) + 1
  num < 10 ? finalNum = '0' + num : finalNum = num
  const url = `https://cdn0.iconfinder.com/data/icons/calico-cat-emoticon-filled/64/cute_cat_kitten_face_avatar_calico-${finalNum}-512.png`

  return function(dispatch) {
    return fetch("http://symposia-api.herokuapp.com/users", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        user: {
          username: user.username,
          password: user.password,
          bio: user.bio,
          slant: user.slant,
          img_url: url
        }
      })
    })
      .then(resp => resp.json())
      .then(data => {
        if (data.errors) {
          alert(data.errors)
        } else {
          localStorage.setItem("token", data.jwt)
          dispatch({type: 'LOGIN_USER', payload: data.user})
          history.push('/index')
        }
      })
  }
}

export function loginUser(user, history) {
  return function(dispatch) {
    return fetch("http://symposia-api.herokuapp.com/login", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({user})
    })
      .then(resp => resp.json())
      .then(data => {
        if (data.errors) {
          alert(data.errors)
        } else {
          localStorage.setItem("token", data.jwt)
          dispatch({type: 'LOGIN_USER', payload: data.user})
          history.push('/index')
        }
      })
  }
}

export function autoLoginUser() {
  return dispatch => {
    const token = localStorage.token;
    if (token) {
      return fetch("http://symposia-api.herokuapp.com/profile", {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      })
        .then(resp => resp.json())
        .then(data => {
          if (data.errors) {
            alert(data.errors)
            localStorage.removeItem("token")
          } else {
            dispatch({type: 'LOGIN_USER', payload: data.user})
          }
        })
    }
  }
}

export function logoutUser(history) {
  return dispatch => {
    dispatch({type: 'LOGOUT_USER'})
    history.push('/')
  }
}
