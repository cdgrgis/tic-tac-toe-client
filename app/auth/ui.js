const store = require('../store')

// RUNS WHEN API SIGN UP IS SUCCESSFUL
const onSignUpSuccess = responseData => {
  $('#sign-up-display').text('Sign up successful')




  $('form').trigger('reset')

  setTimeout(() => {
    $('#sign-up-display').text('')
  }, 5000)


}

// RUNS WHEN API SIGN UP IS FAILED
const onSignUpFailure = err => {
  $('#sign-up-error-display').text('Sign up failed')


  setTimeout(() => {
    $('#sign-up-error-display').text('')
  }, 5000)
}

// RUNS WHEN API SIGN IN IS SUCCESSFUL
const onSignInSuccess = responseData => {
  $('#sign-in-display').text('Sign in successful')
  // SHOWS AFTER SIGN IN SECTION AND HIDES BEFORE SIGN IN SECTION
  $('#after-sign-in').show()
  $('#before-sign-in').hide()

  store.user = responseData.user


  $('form').trigger('reset')



  setTimeout(() => {
    $('#sign-in-display').text('')
  }, 5000)
}

// RUNS WHEN API SIGN IN IS FAILED
const onSignInFailure = err => {
 $('#sign-in-error-display').text('Sign in failed')

 setTimeout(() => {
  $('#sign-in-error-display').text('')
}, 5000)
}

// RUNS WHEN API SIGN OUT IS SUCCESSFUL
const onSignOutSuccess = () => {
  $('#sign-out-display').text('Sign out successful')
  // HIDES AFTER SIGN IN SECTION AND SHOWS BEFORE SIGN IN SECTION
  $('#before-sign-in').show()
  $('#after-sign-in').hide()

  setTimeout(() => {
    $('#sign-out-display').text('')
  }, 5000)
}

// RUNS WHEN API SIGN OUT IS FAILED
const onSignOutFailure = err => {
  $('#sign-out-error-display').text('Sign out failed')

  setTimeout(() => {
    $('#sign-out-error-display').text('')
  }, 5000)
}

// RUNS WHEN API CHANGE PASSWORD IS SUCCESSFUL
const onChangePwSuccess = responseData => {
  $('#change-pw-display').text('Change password successful')

  $('form').trigger('reset')

  setTimeout(() => {
    $('#change-pw-display').text('')
  }, 5000)
}

// /RUS WHEN API CHANGE PASSWORD IS FAILED
const onChangePwFailure = err => {

  $('#change-pw-error-display').text('Change password failed')
grn
  setTimeout(() => {
    $('#change-pw-error-display').text('')
  }, 5000)
}


// EXPORTS FUNCTIONS
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
