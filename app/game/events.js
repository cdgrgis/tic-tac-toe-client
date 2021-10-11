const api = require('./api')
const ui = require('./ui')

const getFormFields = require('../../lib/get-form-fields')


const onNewGame = () => {

  api.newGame()
    .then(ui.onNewGameSuccess)
    .catch(ui.onNewGameFailure)
}



module.exports = {
  onNewGame,
}
