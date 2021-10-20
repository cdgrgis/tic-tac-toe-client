const config = require("../config")
const store = require("../store")

// API SIGN UP
const signUp = (formData) => {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-up',
    data: formData
  })
}

// API SIGN IN
const signIn = (formData) => {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-in',
    data: formData
  })
}

// API CHANGE PASSWORD
const changePw = (formData) => {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/change-password',
    headers: {
      Authorization: `Bearer ${store.user.token}`
    },
    data: formData
  })
}

// API SIGN OUT
const signOut = () => {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/sign-out',
    headers: {
      Authorization: `Bearer ${store.user.token}`
    }
  })
}


// EXPORTS FUNCTIONS
module.exports = {
  signUp,
  signIn,
  changePw,
  signOut,

}
