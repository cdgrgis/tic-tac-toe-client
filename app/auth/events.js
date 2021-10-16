const api = require("./api")
const ui = require("./ui")
const getFormFields = require('../../lib/get-form-fields')


const onSignUp = (event) => {
  event.preventDefault()

  const formData = getFormFields(event.target)
  console.log('form data: ', formData)

  api.signUp(formData)
    .then(ui.onSignUpSuccess)
      .then(() => api.signIn(formData))
        .then(ui.onSignInSuccess)
        .catch(ui.onSignInFailure)
    .catch(ui.onSignUpFailure)
}


const onSignIn = (event) => {
  event.preventDefault()
  const formData = getFormFields(event.target)
  console.log('formData ', formData)


  sessionStorage.setItem('email', formData.credentials.email)
  sessionStorage.setItem('password', formData.credentials.password)




  api.signIn(formData)
      .then(ui.onSignInSuccess)
      .catch(ui.onSignInFailure)


}



const onReloadSignIn = () => {
  const formData = {
    'credentials': {
      'email': sessionStorage.getItem('email'),
      'password': sessionStorage.getItem('password')
    }
  }
  console.log(formData)
  if (sessionStorage.getItem('email')) {

    api.signIn(formData)
      .then(ui.onSignInSuccess)
      .catch(ui.onSignInFailure)
  }


}



const onChangePw = event => {
  event.preventDefault()

  const formData = getFormFields(event.target)

  api.changePw(formData)
    .then(ui.onChangePwSuccess)
    .catch(ui.onChangePwFailure)
}


const onSignOut = () => {
  api.signOut()
    .then(ui.onSignOutSuccess)
    .catch(ui.onSignOutFailure)
}

//

module.exports = {
  onSignUp,
  onSignIn,
  onChangePw,
  onSignOut,
  onReloadSignIn,




}
