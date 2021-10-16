/* eslint-disable no-unused-vars */
/* eslint-disable keyword-spacing */
const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../lib/get-form-fields')
const store = require('../store')

let takenSquareArray = []
let userToken
let count = 0
let winner = true
let player1Token = 'X'
let player2Token = 'O'
store.winner = winner
store.count = count
store.userToken = userToken
store.takenSquareArray = takenSquareArray

const onNewGame = () => {
  winner = false
  count = 0

  $('.box').text('')
  store.takenSquareArray = []
  $('#winner-display').text('')

  api.newGame()
    .then(ui.onNewGameSuccess)
    .catch(ui.onNewGameFailure)
}

const onUserTurn = (event) => {
  const cellId = event.target.id
  const updateCell = parseInt(cellId[3]) - 1


  count = store.takenSquareArray.length


  if (count % 2 === 0 && !winner) {
    userToken = player1Token
  } else if (count % 2 === 1 && !winner) {
    userToken = player2Token
  } else {
    userToken = ''
  }

  if(!store.takenSquareArray.includes(cellId) && !winner) {
    $(`#${cellId}`).text(userToken)
    store.takenSquareArray.push(cellId)

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
        winner = true
        count = 0

        $('#winner-display').text('winner is ' + userToken)
        $('#game-message').text('Lets play a new game')
      } else if (store.takenSquareArray.length === 9) {
        $('#winner-display').text('Its a tie')
        winner = true
      }
    }

    api.updateGame(updateCell, userToken, winner)
      .then(ui.onUserTurnSuccess)
      .catch(ui.onUserTurnFailure)





  } else if (winner) {
    $('#game-error-display').text('Game over')

    setTimeout(() => {
      $('#game-error-display').text('')
    }, 5000)
  } else {
    $('#game-error-display').text('Box Taken')
  }


}





const onViewGameAmount = () => {
  api.viewGames()
    .then(ui.onViewGameAmountSuccess)
    .catch(ui.onViewGameAmountFailure)
}


const onViewPastGames = () => {
api.viewGames()
  .then(ui.onViewPastGamesSuccess)
  .catch(ui.onViewPastGamesFailure)
}


const onContinueGame = (event) => {
  const id = event.target.id

  winner = false
  store.takenSquareArray = []


  api.continueGame(id)
    .then(ui.onContinueGameSuccess)
    .catch(ui.onContinueGameFailure)
}


const onCustomTokens = (event) => {
  event.preventDefault()

  const formData = getFormFields(event.target)
  console.log(formData['player1-token'])
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
