// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/events')
const gameEvents = require('./game/events')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // your JS code goes here
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-pw').on('submit', authEvents.onChangePw)
  $('#sign-out').on('click', authEvents.onSignOut)
  $('#view-games').on('click', authEvents.onViewGameAmount)

  $('#new-game').on('click', gameEvents.onNewGame)
  $('#game-display').on('click', gameEvents.onUserTurn)














})
