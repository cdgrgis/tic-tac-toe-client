const store = require('../store')
const config = require('../config')

// API NEW GAME
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

// API UPDATE GAME
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

// API GET GAMES
const viewGames = () => {
  return $.ajax({
    url: config.apiUrl + '/games',
    headers: {
      Authorization: `Bearer ${store.user.token}`
    }
  })
}


// API GET SPECIFIC GAME
const continueGame = (id) => {
  return $.ajax({
    url: config.apiUrl + '/games/' + id,
    headers: {
      Authorization: `Bearer ${store.user.token}`
    }
  })
}

// EXPORTS FUNCTIONS
module.exports = {
  newGame,
  updateGame,
  viewGames,
  continueGame,


}
