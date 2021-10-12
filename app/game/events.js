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
  const cell = event.target.id
  console.log(event)


  functions.inputToken(cell, functions.determineUserToken)


  functions.determineWinner()


  api.updateGame(cell)
    .then(ui.onUserTurnSuccess)
    .catch(ui.onUserTurnFailure)

}





module.exports = {
  onNewGame,
  onUserTurn,
}
