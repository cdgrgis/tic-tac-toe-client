const store = require('../store')

const onSignUpSuccess = responseData => {
  $('#game-display').text('Sign up successful')
  console.log(responseData)

  $('form').trigger('reset')
}

const onSignUpFailure = err => {
  console.error(err)
  $('error-display').text('Sign up failed')
}

const onSignInSuccess = responseData => {
  $('#game-display').text('Sign in successful')
  console.log(responseData)

  store.user = responseData.user
  console.log('store is: ', store)

  $('form').trigger('reset')
}

const onSignInFailure = err => {
  console.error(err)
  $('#error-display').text('Sign in failed')
}


const onSignOutSuccess = () => {
  $('#game-display').text('Sign out successful')
}

const onSignOutFailure = err => {
  console.error(err)
  $('#error-display').text('Sign out failed')
}

const onChangePwSuccess = responseData => {
  console.log(responseData)
  $('#game-display').text('Change password successful')

  $('form').trigger('reset')
}


const onChangePwFailure = err => {
  console.error(err)

  $('#error-display').text('Change password failed')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangePwSuccess,
  onChangePwFailure,
  onSignOutSuccess,
  onSignOutFailure,



}
