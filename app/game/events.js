const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../lib/get-form-fields')

let takenSquareArray = []
let count = 0
let userToken


const onNewGame = () => {

  api.newGame()
    .then(ui.onNewGameSuccess)
    .catch(ui.onNewGameFailure)
}

const onSelectBox = (event) => {

  const id = event.target.id
  if(count % 2 === 0) {
    userToken = 'X'
  } else {
    userToken = 'O'
  }


  if(!takenSquareArray.includes(id)) {
    $(`#${id}`).text(userToken)
    takenSquareArray.push(id)
    count += 1
  } else {
    $('#game-error-display').text('Box taken')

    setTimeout(() => {
      $('#game-error-display').text('')
    }, 5000)
  }




}



module.exports = {
  onNewGame,
  onSelectBox,
}
