/* eslint-disable no-unused-vars */
/* eslint-disable keyword-spacing */
const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../lib/get-form-fields')
const functions = require('./event-func')



let userToken


const onNewGame = () => {

  api.newGame()
    .then(ui.onNewGameSuccess)
    .catch(ui.onNewGameFailure)
}

const onSelectBox = (event) => {
  const id = event.target.id

  functions.inputToken(id, functions.determineUserToken)

  functions.determineWinner()

}





module.exports = {
  onNewGame,
  onSelectBox,
}
