/* eslint-disable no-unused-vars */
/* eslint-disable keyword-spacing */

// REQUIRES FUNCTIONS
const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../lib/get-form-fields')
const store = require('../store')

// DECLARES VARIABLES
let takenSquareArray = []
let userToken
let count = 0
let winner = true
let player1Token = 'X'
let player2Token = 'O'
let viewButtonToggle = false

// STORES VARIABLES
store.winner = winner
store.count = count
store.userToken = userToken
store.takenSquareArray = takenSquareArray

// RUNS WHEN NEW BUTTON IS CLICKED
const onNewGame = () => {

  // RESETS VARIABLES
  winner = false
  count = 0
  store.takenSquareArray = []

  // RESETS GAME BOARD TEXT & COLOR
  $('.box').text('').css('background-color', 'var(--purple)')
  $('#winner-display').text('')

  // CALLS API FUNCTION
  api.newGame()
    .then(ui.onNewGameSuccess)
    .catch(ui.onNewGameFailure)
}

// RUNS WHEN USER CLICKS ON GAME BOARD
const onUserTurn = (event) => {

  // REQUIRES CELL THAT WAS CLICKED
  const cellId = event.target.id
  const updateCell = parseInt(cellId[3]) - 1

  // UPDATES COUNT
  count = store.takenSquareArray.length

  // SETS USER TOKEN
  if (count % 2 === 0 && !winner) {
    userToken = player1Token
  } else if (count % 2 === 1 && !winner) {
    userToken = player2Token
  } else {
    userToken = ''
  }

  // CHECKS IF CELL IS TAKEN
  if(!store.takenSquareArray.includes(cellId) && !winner) {

    // SETS TEXT TO CELL
    $(`#${cellId}`).text(userToken).css('background-color','var(--byzantine)')

    // UPDATE VARIABLE COUNTING WHICH CELLS HAVE BEEN TAKEN
    store.takenSquareArray.push(cellId)

    // CHECKS IF THERE IS A WINNER
    if (count !== 0) {
      if (
        $('#box1').text() === $('#box2').text() && $('#box2').text() === $('#box3').text() && $('.row1').text() !== '' ||
        $('#box4').text() === $('#box5').text() && $('#box5').text() === $('#box6').text() && $('.row2').text() !== '' ||
        $('#box7').text() === $('#box8').text() && $('#box8').text() === $('#box9').text() && $('.row3').text() !== '' ||
        $('#box1').text() === $('#box4').text() && $('#box4').text() === $('#box7').text() && $('.col1').text() !== '' ||
        $('#box2').text() === $('#box5').text() && $('#box5').text() === $('#box8').text() && $('.col2').text() !== '' ||
        $('#box3').text() === $('#box6').text() && $('#box6').text() === $('#box9').text() && $('.col3').text() !== '' ||
        $('#box1').text() === $('#box5').text() && $('#box5').text() === $('#box9').text() && $('.dia1').text() !== '' ||
        $('#box3').text() === $('#box5').text() && $('#box5').text() === $('#box7').text() && $('.dia2').text() !== ''
        ) {

        // SETS WINNER TO TRUE AND RESETS COUNT
        winner = true
        count = 0

        // GAME OVER DISPLAY MESSAGE
        $('#winner-display').text('Winner is ' + userToken)
        $('#game-message').text('Lets play a new game')

        // CHECKS FOR TIE
      } else if (store.takenSquareArray.length === 9) {
        $('#winner-display').text('Its a tie')
        winner = true
      }
    }

    // RUNS API FUNCTION
    api.updateGame(updateCell, userToken, winner)
      .then(ui.onUserTurnSuccess)
      .catch(ui.onUserTurnFailure)




  // CHECKS IF GAME IS OVER
  } else if (winner) {
    $('#winner-display').text('Game over')

    setTimeout(() => {
      $('#winner-display').text('')
    }, 5000)

    // MESSAGE FOR CLICKING ON A TAKEN BOX
  } else {
    $('#winner-display').text('Box Taken')

    setTimeout(() => {
      $('#winner-display').text('')
    }, 2000)
  }


}




// RUNS WHEN VIEW GAME AMOUNT BUTTON IS CLICKED
const onViewGameAmount = () => {
  // RUNS API FUNCTION TO RETRIEVE GAMES
  api.viewGames()
    .then(ui.onViewGameAmountSuccess)
    .catch(ui.onViewGameAmountFailure)
}

// RUNS WHEN VIEW PAST GAMES BUTTON IS CLICKED
const onViewPastGames = () => {
  //TOGGLES VIEW PAST GAMES BUTTON BETWEEN RUNNING API FUNCTION AND CLEARING PAST GAMES
  if (!viewButtonToggle) {
    viewButtonToggle = !viewButtonToggle
    // RUNS API FUNCTION TO RETRIEVE GAMES
    api.viewGames()
      .then(ui.onViewPastGamesSuccess)
      .catch(ui.onViewPastGamesFailure)
  } else {
    // CLEARS BOARD
    $('#view-past-games-display').html('')
    viewButtonToggle = !viewButtonToggle
  }
}

// RUNS WHEN PAST GAME'S CONTINUE BUTTON HAS BEEN CLICKED
const onContinueGame = (event) => {
  // OBTAINS GAME INFO FROM API
  const id = event.target.id
  // RESETS VARIABLES
  winner = false
  store.takenSquareArray = []

  // RUNS API FUNCTION TO UPDATE GAME
  api.continueGame(id)
    .then(ui.onContinueGameSuccess)
    .catch(ui.onContinueGameFailure)
}

// RUNS WHEN CUSTOM TOKENS FORM IS SUBMITTED
const onCustomTokens = (event) => {
  event.preventDefault()

  const formData = getFormFields(event.target)
  // OBTAINS AND SETS THE CUSTOM TOKENS
  player1Token = formData['player1-token']
  player2Token = formData['player2-token']

  $('form').trigger('reset')
  $('#custom-tokens-display').text('Tokens updated')

  setTimeout(() => {
    $('#custom-tokens-display').text('')
  }, 5000)
}

module.exports = {
  onNewGame,
  onUserTurn,
  onViewGameAmount,
  onViewPastGames,
  onContinueGame,
  onCustomTokens
}
