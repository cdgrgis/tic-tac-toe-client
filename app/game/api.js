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


module.exports = {
  newGame,

}
