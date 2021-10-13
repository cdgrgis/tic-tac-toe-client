const store = require("../store")
const gameEvents = require("./events")


const onNewGameSuccess = (responseData) => {
  store.game = responseData.game
  console.log('store.game: ', store.game)

  store.count = 0




  $('#game-message').text('New game success')

  setTimeout(() => {
    $('#game-message').text('')
  }, 5000)
}


const onNewGameFailure = (err) => {
  console.error(err)

  $('#error-display').text('New game failed')

  setTimeout(() => {
    $('#error-display').text('')
  }, 5000)
}


const onUserTurnSuccess = (responseData) => {
  store.game = responseData.game
  console.log(store.game)
  if(!store.winner) {
    $('#game-message').text(`It is Player ${store.userToken}'s turn`)

    setTimeout(() => {
      $('#game-message').text('')
    }, 5000)
  }
}


const onUserTurnFailure = err => {
  console.error(err)

  $('#error-display').text('Update Game Failed')
}


module.exports = {
  onNewGameSuccess,
  onNewGameFailure,
  onUserTurnSuccess,
  onUserTurnFailure,

}
