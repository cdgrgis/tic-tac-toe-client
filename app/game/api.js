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


const updateGame = (cell, userToken, winner) => {
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
          "value": userToken
        },
        "over": winner
      }
    }
  })
}


module.exports = {
  newGame,
  updateGame,

}
