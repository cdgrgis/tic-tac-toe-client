/* eslint-disable no-unused-vars */
/* eslint-disable keyword-spacing */
const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../lib/get-form-fields')
const functions = require('./event-func')
const store = require('../store')



let userToken


const onNewGame = () => {
  api.newGame()
    .then(ui.onNewGameSuccess)
    .catch(ui.onNewGameFailure)
}

const onUserTurn = (event) => {
  const cellId = event.target.id
  const updateCell = parseInt(cellId[3]) - 1



  functions.inputToken(cellId, functions.determineUserToken)


  functions.determineWinner()


  api.updateGame(updateCell)
    .then(ui.onUserTurnSuccess)
    .catch(ui.onUserTurnFailure)

}





module.exports = {
  onNewGame,
  onUserTurn,
}
