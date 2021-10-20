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

  $('#view-game-amount').on('click', gameEvents.onViewGameAmount)
  $('#view-past-games').on('click', gameEvents.onViewPastGames)
  $('#new-game').on('click', gameEvents.onNewGame)
  $('#game-display').on('click', gameEvents.onUserTurn)
  $('#view-past-games-display').on('click', '.continue-past-game', gameEvents.onContinueGame)
  $('#custom-tokens').on('submit', gameEvents.onCustomTokens)


  window.onload = authEvents.onReloadSignIn()




  })















