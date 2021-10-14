const api = require("./api")
const ui = require("./ui")
const getFormFields = require('../../lib/get-form-fields')


const onSignUp = (event) => {
  event.preventDefault()

  const formData = getFormFields(event.target)

  api.signUp(formData)
    .then(ui.onSignUpSuccess)
    .catch(ui.onSignUpFailure)
}


const onSignIn = (event) => {
  event.preventDefault()


  const formData = getFormFields(event.target)

  api.signIn(formData)
    .then(ui.onSignInSuccess)
    .catch(ui.onSignInFailure)
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


const onViewGameAmount = () => {
  api.viewGames()
    .then(ui.onViewGameAmountSuccess)
    .catch(ui.onViewGameAmountFailure)
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePw,
  onSignOut,
  onViewGameAmount,
  


}
