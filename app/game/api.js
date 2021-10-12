const store = require('../store')
const config = require('../config')


const newGame = () => {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/games',
    headers: {
      Authorization: `Bearer ${store.user.token}`
    },
    data: '{}'
  })
}


const updateGame = cell => {
  return $.ajax({
    method: 'PATCH',
    url: `${config.apiUrl}/games/${store.game._id}`,
    headers: {
      Authorization: `Bearer ${store.user.token}`
    },
    data: {
      "game": {
        "cell": {
          "index": cell,
          "value": store.gameToken
        },
        "over": store.winner
      }
    }
  })
}


module.exports = {
  newGame,
  updateGame,

}
