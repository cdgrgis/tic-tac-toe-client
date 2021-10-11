const store = require("../store")

const onNewGameSuccess = (responseData) => {
  store.game = responseData.game
  console.log('game: ', store.game)

  $('#game-display').text('New game success')
}

const onNewGameFailure = (err) => {
  console.error(err)

  $('#error-display').text('New game failed')
}


module.exports = {
  onNewGameSuccess,
  onNewGameFailure,

}
