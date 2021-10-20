const store = require('../store')

const onSignUpSuccess = responseData => {
  $('#sign-up-display').text('Sign up successful')
  console.log('response data: ', responseData)



  $('form').trigger('reset')

  setTimeout(() => {
    $('#sign-up-display').text('')
  }, 5000)


}

const onSignUpFailure = err => {
  console.error(err)
  $('#sign-up-error-display').text('Sign up failed')


  setTimeout(() => {
    $('#sign-up-error-display').text('')
  }, 5000)
}

const onSignInSuccess = responseData => {
  $('#sign-in-display').text('Sign in successful')
  $('#after-sign-in').show()
  $('#before-sign-in').hide()

  store.user = responseData.user
  console.log('store is: ', store)

  $('form').trigger('reset')



  setTimeout(() => {
    $('#sign-in-display').text('')
  }, 5000)
}

const onSignInFailure = err => {
  console.error(err)
 $('#sign-in-error-display').text('Sign in failed')

 setTimeout(() => {
  $('#sign-in-error-display').text('')
}, 5000)
}


const onSignOutSuccess = () => {
  $('#sign-out-display').text('Sign out successful')
  $('#before-sign-in').show()
  $('#after-sign-in').hide()

  setTimeout(() => {
    $('#sign-out-display').text('')
  }, 5000)
}

const onSignOutFailure = err => {
  console.error(err)
  $('#sign-out-error-display').text('Sign out failed')

  setTimeout(() => {
    $('#sign-out-error-display').text('')
  }, 5000)
}

const onChangePwSuccess = responseData => {
  console.log(responseData)
  $('#change-pw-display').text('Change password successful')

  $('form').trigger('reset')

  setTimeout(() => {
    $('#change-pw-display').text('')
  }, 5000)
}


const onChangePwFailure = err => {
  console.error(err)

  $('#change-pw-error-display').text('Change password failed')
grn
  setTimeout(() => {
    $('#change-pw-error-display').text('')
  }, 5000)
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
