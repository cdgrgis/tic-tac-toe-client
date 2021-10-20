const api = require("./api")
const ui = require("./ui")
const getFormFields = require('../../lib/get-form-fields')

// RUNS WHEN SIGN UP IS SUBMITTED
const onSignUp = (event) => {
  event.preventDefault()

  const formData = getFormFields(event.target)


  api.signUp(formData)
    .then(ui.onSignUpSuccess)
      // RUNS TO AUTOMATICALLY SIGN IN AFTER SIGN UP
      .then(() => api.signIn(formData))
        .then(ui.onSignInSuccess)
        .catch(ui.onSignInFailure)
    .catch(ui.onSignUpFailure)
}

// RUNS WHEN SIGN IN IS SUBMITTED
const onSignIn = (event) => {
  event.preventDefault()
  const formData = getFormFields(event.target)

  // SETS EMAIL AND PASSWORD TO BROWER'S SESSION STORAGE
  sessionStorage.setItem('email', formData.credentials.email)
  sessionStorage.setItem('password', formData.credentials.password)




  api.signIn(formData)
      .then(ui.onSignInSuccess)
      .catch(ui.onSignInFailure)


}


// RUNS WHEN BROWSER IS RELOADED
const onReloadSignIn = () => {
  // SETS EMAIL AND PASSWORD IN FORM DATA FORMAT
  const formData = {
    'credentials': {
      'email': sessionStorage.getItem('email'),
      'password': sessionStorage.getItem('password')
    }
  }
  // IF CLIENT IS ALREADY SIGNED IN, RUN API SIGN IN
  if (sessionStorage.getItem('email')) {

    api.signIn(formData)
      .then(ui.onSignInSuccess)
      .catch(ui.onSignInFailure)
  }


}


// RUNS WHEN CHANGE PASSWORD IS SUBMITTED
const onChangePw = event => {
  event.preventDefault()

  const formData = getFormFields(event.target)

  api.changePw(formData)
    .then(ui.onChangePwSuccess)
    .catch(ui.onChangePwFailure)
}

// RUNS WHEN SIGN OUT BUTTON IS CLICKED
const onSignOut = () => {
  api.signOut()
    .then(ui.onSignOutSuccess)
    .catch(ui.onSignOutFailure)
}


// EXPORTS FUNCTIONS
module.exports = {
  onSignUp,
  onSignIn,
  onChangePw,
  onSignOut,
  onReloadSignIn,




}
