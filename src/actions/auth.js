export function signUpUser (user, history) {
  return function(dispatch) {
    return fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({user})
    })
      .then(resp => resp.json())
      .then(data => {
        if (data.message) {
          alert(data.message)
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
    return fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({user})
    })
      .then(resp => resp.json())
      .then(data => {
        if (data.message) {
          alert(data.message)
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
      return fetch("http://localhost:3000/profile", {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      })
        .then(resp => resp.json())
        .then(data => {
          if (data.message) {
            alert(data.message)
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
