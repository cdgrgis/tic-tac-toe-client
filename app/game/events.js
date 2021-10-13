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
store.winner = winner
store.count = count
store.userToken = userToken





const onNewGame = () => {
  winner = false
  count = 0

  $('.box').text('')
  takenSquareArray = []
  $('#winner-display').text('')

  api.newGame()
    .then(ui.onNewGameSuccess)
    .catch(ui.onNewGameFailure)
}

const onUserTurn = (event) => {
  const cellId = event.target.id
  const updateCell = parseInt(cellId[3]) - 1

  if (count % 2 === 0 && !winner) {
    userToken = 'X'

  } else if (count % 2 === 1 & !winner) {
    userToken = 'O'

  } else {
    userToken = ''
  }

  if(!takenSquareArray.includes(cellId)) {
    $(`#${cellId}`).text(userToken)

    takenSquareArray.push(cellId)

    count +=1
  } else {
    $('#game-error-display').text('Box Taken')

    setTimeout(() => {
      $('#game-error-display').text('')
    }, 5000)
  }

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


    } else if (takenSquareArray.length === 9) {
      $('#winner-display').text('Its a tie')
    }
  }




  api.updateGame(updateCell, userToken, winner)
    .then(ui.onUserTurnSuccess)
    .catch(ui.onUserTurnFailure)



}





module.exports = {
  onNewGame,
  onUserTurn,
}
