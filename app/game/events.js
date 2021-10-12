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

<<<<<<< HEAD
const onSelectBox = (event) => {
=======

const onTurn = (event) => {

>>>>>>> a348192 (Committing in order to pull update from separate device)
  const id = event.target.id

  functions.inputToken(id, functions.determineUserToken)

<<<<<<< HEAD
  functions.determineWinner()
=======
  

>>>>>>> a348192 (Committing in order to pull update from separate device)

}





module.exports = {
  onNewGame,
  onTurn,
}
