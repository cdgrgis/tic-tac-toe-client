// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const events = require("./auth/events")

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // your JS code goes here
  $('#sign-up').on('submit', events.onSignUp)
  $('#sign-in').on('submit', events.onSignIn)
  $('#change-pw').on('submit', events.onChangePw)
  $('#sign-out').on('click', events.onSignOut)
})
