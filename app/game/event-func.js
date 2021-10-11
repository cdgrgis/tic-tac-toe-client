const takenSquareArray = []
let count = 0

const determineUserToken = count => {
  if (count % 2 === 0) {
    return 'X'
  } else {
    return 'O'
  }
}


const inputToken = (id, determineUserToken) => {
  userToken = determineUserToken(count)
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


const determineWinner = () => {
  if (
    $('#box1').text() === $('#box2').text() && $('#box2').text() === $('#box3').text() ||
    $('#box4').text() === $('#box5').text() && $('#box5').text() === $('#box6').text() ||
    $('#box7').text() === $('#box8').text() && $('#box8').text() === $('#box9').text() ||
    $('#box1').text() === $('#box4').text() && $('#box4').text() === $('#box7').text() ||
    $('#box2').text() === $('#box5').text() && $('#box5').text() === $('#box8').text() ||
    $('#box3').text() === $('#box6').text() && $('#box6').text() === $('#box9').text() ||
    $('#box1').text() === $('#box5').text() && $('#box5').text() === $('#box9').text() ||
    $('#box3').text() === $('#box5').text() && $('#box5').text() === $('#box7').text()
    ) {
    $('#winner-display').text('winner is ' + userToken)
    userToken = ''
  } else if (
    takenSquareArray.length === 9
  ) {
    $('#winner-display').text('Its a tie')
  }
}


module.exports = {
  determineUserToken,
  inputToken,
  determineWinner,

}
