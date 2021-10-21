const store = require("../store")
const gameEvents = require("./events")

// RUNS WHEN NEW GAME API CALL IS SUCCESSFUL
const onNewGameSuccess = (responseData) => {
  store.game = responseData.game


  store.count = 0


  // UPDATE TEXT ON BROWSER
  $('#view-past-games-display').html('')
  $('#game-message').text('New game success')
  $('#game-display').css('display', 'flex')


  setTimeout(() => {
    $('#game-message').text('')
  }, 5000)
}

// FUNCTION FOR NEW GAME API CALL FAILURE
const onNewGameFailure = (err) => {
  $('#error-display').text('New game failed')

  setTimeout(() => {
    $('#error-display').text('')
  }, 5000)
}

// RUNS WHEN API UPDATE IS SUCCESSFUL
const onUserTurnSuccess = (responseData) => {
  store.game = responseData.game


  // UPDATE USER MESSAGE
  if(!store.winner) {
    $('#game-message').text(`It is Player ${store.userToken}'s turn`)

    setTimeout(() => {
      $('#game-message').text('')
    }, 5000)
  }
}

// RUNS WHEN UPDATE API CALL IS FAILED
const onUserTurnFailure = err => {
  $('#error-display').text('Update Game Failed')
}

// RUNS WHEN API GET CALL IS SUCCESSFUL FOR GAME AMOUNT
const onViewGameAmountSuccess = responseData => {
  store.pastGames = responseData.games

  // OUTPUTS GAME AMOUNT AND MESSAGE
  if(store.pastGames.length === 0) {
    $('#view-games-display').html(`<h3>'You have played ' + store.pastGames.length + ' games!\nLet\'s start your first game'</h3>`)
  } else if (store.pastGames.length > 0 && store.pastGames.length < 50) {
    $('#view-games-display').text('You have played ' + store.pastGames.length + ' games!\nJust getting started')
  } else if (store.pastGames.length > 100 && store.pastGames.length < 201) {
    $('#view-games-display').text('You have played ' + store.pastGames.length + ' games!\nCan you believe it?!')
  } else if (store.pastGames.length > 200) {
    $('#view-games-display').text('You have played ' + store.pastGames.length + ' games!\nYou must be a master by now!')
  }

}
// RUNS WHEN API GET FOR GAME AMOUNT IS FAILED
const onViewGameAmountFailure = err => {
  $('#view-games-error').text('View game amount failed')
}

// RUNS WHEN API GET FOR PAST GAMES IS SUCCESSFUL
const onViewPastGamesSuccess = responseData => {
  store.pastGames = responseData.games
  // DECLARING VARIABLE TO HOLD PAST GAME HTML
  let gameHtml = ''
  // ADDS HTML FOR EACH PAST GAME TO VARIABLE
  for(let i=0; i<store.pastGames.length; i++) {

    gameHtml += `

    <div class="past-games">
      <div class="past-game-info">
        <h1>Game Over: ${store.pastGames[i].over}</h1>
        <br>
        <h2>Game ID is: ${store.pastGames[i]._id}</h2>
        <br>
        <h2>Created: ${store.pastGames[i].createdAt}</h2>

      </div>

      <div class="past-game-board">
        <div class="past-container">
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
      </div>
    </div>
  `
  // RUNS IF GAME IS NOT OVER AND ADDS BUTTON
  if (store.pastGames[i].over === false) {
    gameHtml += `
  <button class="continue-past-game" id="${store.pastGames[i]._id}">Keep Playing</button>

  <hr>`
  } else {
    gameHtml += `
    <hr>
    `
  }
}

  // INPUTS HTML TO BROWSER
  $('#view-past-games-display').html(gameHtml)
  // CHANGES VALUE OF PAST GAMES BUTTON
  $('#view-past-games').text('Hide Past Games')

}
// RUNS WHEN UPDATE API CALL FOR PAST GAMES IS FAILED
const onViewPastGamesFailure = err => {

  $('#view-past-games-error').text('View past games failed')
}

// RUNS WHEN GET SPECIFIC GAME API CALL IS SUCCESSFUL
const onContinueGameSuccess = (responseData) => {
  store.game = responseData.game

  // UPDATES BROWSER TEXT AND REVEALS BOARD
  $('#game-message').text('Continue game success')
  $('#game-display').css('display', 'flex')
  $('.box').css('background-color', 'var(--purple)')


  setTimeout(() => {
    $('#game-message').text('')
  }, 5000)

  $('#winner-display').text('')

  $('#view-past-games-display').html('')

  // iNPUTS TEXT OF PAST GAME TO GAME BOARD
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

// RUNS WHEN GET SPECIFIC GAME API CALL
const onContinueGameFailure = err => {
  $('#past-games-error').text('continue game failure')
}
// EXPORTS FUNCTIONS
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
