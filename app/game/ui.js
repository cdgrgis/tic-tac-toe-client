const store = require("../store")
const gameEvents = require("./events")
const functions = require("./event-func")

const onNewGameSuccess = (responseData) => {
  store.game = responseData.game
  console.log('store.game: ', store.game)

  store.count = 0



  $('#past-games-display').html('')
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


const onViewGameAmountSuccess = responseData => {
  store.pastGames = responseData.games
  console.log("store.pastGames: ", store.pastGames)


  if(store.pastGames.length === 0) {
    $('#view-games-display').text('You have played ' + store.pastGames.length + ' games!\nLet\'s start your first game')
  } else if (store.pastGames.length > 0 && store.pastGames.length < 50) {
    $('#view-games-display').text('You have played ' + store.pastGames.length + ' games!\nJust getting started')
  } else if (store.pastGames.length > 100 && store.pastGames.length < 201) {
    $('#view-games-display').text('You have played ' + store.pastGames.length + ' games!\nCan you believe it?!')
  } else if (store.pastGames.length > 200) {
    $('#view-games-display').text('You have played ' + store.pastGames.length + ' games!\nYou must be a master by now!')
  }

}

const onViewGameAmountFailure = err => {
  console.error(err)
  $('#view-games-error').text('View game amount failed')
}


const onViewPastGamesSuccess = responseData => {
  store.pastGames = responseData.games
  console.log("store.pastGames: ", store.pastGames)

  let gameHtml = ''

  for(let i=0; i<store.pastGames.length; i++) {

    gameHtml += `

    <div id="past-game-${i}">
      <h3>Game ID is: ${store.pastGames[i]._id}</h3>
      <h5>Created: ${store.pastGames[i].createdAt}</h5>
      <h5>Game Over: ${store.pastGames[i].over}</h5>
    <div class="container">
    <div class="row">
      <div class="col-4 box row1 col1 dia1">${store.pastGames[i].cells[0]}</div>
      <div class="col-4 box row1 col2">${store.pastGames[i].cells[1]}</div>
      <div class="col-4 box row1 col3 dia2">${store.pastGames[i].cells[2]}</div>
    </div>

    <div class="row">
      <div class="col-4 box row2 col1">${store.pastGames[i].cells[3]}</div>
      <div class="col-4 box row2 col2 dia1 dia2">${store.pastGames[i].cells[4]}</div>
      <div class="col-4 box row2 col3">${store.pastGames[i].cells[5]}</div>
    </div>

    <div class="row">
      <div class="col-4 box row3 col1 dia2">${store.pastGames[i].cells[6]}</div>
      <div class="col-4 box row3 col2">${store.pastGames[i].cells[7]}</div>
      <div class="col-4 box row3 col3 dia1">${store.pastGames[i].cells[8]}</div>
    </div>
  </div>
  `
  if (store.pastGames[i].over === false) {
    gameHtml += `
  <button class="past-game" id="${store.pastGames[i]._id}">Keep Playing</button>

  <hr>`
  } else {
    gameHtml += `
    <hr>
    `
  }
}


  $('#view-past-games-display').html(gameHtml)

}

const onViewPastGamesFailure = err => {
  console.error(err)
  $('#view-past-games-error').text('View past games failed')
}


const onContinueGameSuccess = (responseData) => {
  store.game = responseData.game
  console.log(store.game)


  $('#game-message').text('Continue game success')

  setTimeout(() => {
    $('#game-message').text('')
  }, 5000)

  $('#winner-display').text('')





  $('#view-past-games-display').html('')

  $('#box1').text(store.game.cells[0])
  store.takenSquareArray[0] = store.game.cells[0]
  $('#box2').text(store.game.cells[1])
  store.takenSquareArray[1] = store.game.cells[1]
  $('#box3').text(store.game.cells[2])
  store.takenSquareArray[2] = store.game.cells[2]

  $('#box4').text(store.game.cells[3])
  store.takenSquareArray[3] = store.game.cells[3]
  $('#box5').text(store.game.cells[4])
  store.takenSquareArray[4] = store.game.cells[4]
  $('#box6').text(store.game.cells[5])
  store.takenSquareArray[5] = store.game.cells[5]

  $('#box7').text(store.game.cells[6])
  store.takenSquareArray[6] = store.game.cells[6]
  $('#box8').text(store.game.cells[7])
  store.takenSquareArray[7] = store.game.cells[7]
  $('#box9').text(store.game.cells[8])
  store.takenSquareArray[8] = store.game.cells[8]
}


const onContinueGameFailure = err => {
  console.error(err)

  $('#past-games-error').text('continue game failure')
}

module.exports = {
  onNewGameSuccess,
  onNewGameFailure,
  onUserTurnSuccess,
  onUserTurnFailure,
  onViewGameAmountSuccess,
  onViewGameAmountFailure,
  onViewPastGamesSuccess,
  onViewPastGamesFailure,
  onContinueGameSuccess,
  onContinueGameFailure,



}
