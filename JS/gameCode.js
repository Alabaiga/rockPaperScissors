// button queries
const playGameBtn = document.getElementById('playGame');
const rockBtn = document.getElementById('rockButton');
const paperBtn = document.getElementById('paperButton');
const scissorsBtn = document.getElementById('scissorsButton');
const resetGameBtn = document.getElementById('resetGameBtn')
// text container and p creation
const roundInfoTextContainer = document.querySelector('.roundTextHolder');
const roundInfo = document.createElement('p')
const gameTextContainer = document.querySelector('.gameStatHolder')
const gameText = document.createElement('p')
roundInfo.classList.add('roundInfo')
gameText.classList.add('gameText')
roundInfoTextContainer.appendChild(roundInfo)
// Function to setup computer play of rock, paper and scissors via randomly choosing from an array
function computerPlay() {
    playType = ['rock','paper','scissors']
    return result = playType[Math.floor(Math.random()* 2)]
}

function textChange() {
  gameText.textContent= `Computer wins: ${compWins}` + '\r\n' + `Player wins: ${userWins}`
  gameText.style.fontSize = '28px'
  gameText.style.color = 'white'
  gameText.style.fontWeight = 'bold'
  gameTextContainer.appendChild(gameText)
}
// variables to count wins
let compWins = 0
let userWins = 0

const disableBtns = () => {
  rockBtn.disabled = true
  paperBtn.disabled = true
  scissorsBtn.disabled = true
  rockBtn.style.background = '#828583'
  rockBtn.style.opacity = ('.5')
  paperBtn.style.background = '#828583'
  paperBtn.style.opacity = ('.5')
  scissorsBtn.style.background = '#828583'
  scissorsBtn.style.opacity = ('.5')
}
const roundWin = function () {
  if (compWins === 5) {
    document.getElementById('mainText').textContent = 'Game over. Play again?'
    disableBtns()   
    resetGameBtn.style.display = 'inline-block'
  } else if (userWins === 5) {
    document.getElementById('mainText').textContent = 'Congratulations! You win! Play again?'
    disableBtns()
    resetGameBtn.style.display = 'inline-block'
  } else return
  }

// function that plays a round of rock,paper scissors
function playRound(computerPlay,userChoice) {
  if (computerPlay != userChoice) {
    if (userChoice === 'rock') {
        if (computerPlay === 'paper') {
          compWins += 1
          gameText.textContent= `Computer wins: ${compWins} Player wins: ${userWins}`
          roundInfo.textContent= `Computer choice: ${computerPlay[0].toUpperCase()+computerPlay.substring(1)} User choice: ${userChoice[0].toUpperCase()+userChoice.substring(1)}`
          roundWin()
        } else {
          userWins += 1
          gameText.textContent= `Computer wins: ${compWins} Player wins: ${userWins}`
          roundInfo.textContent = `Computer choice: ${computerPlay[0].toUpperCase()+computerPlay.substring(1)} User choice: ${userChoice[0].toUpperCase()+userChoice.substring(1)}`
          roundWin()
        }
    } else if (userChoice === 'paper') {
        if (computerPlay ==='rock') {
          userWins += 1
          gameText.textContent= `Computer wins: ${compWins} Player wins: ${userWins}`
          roundInfo.textContent = `Computer choice: ${computerPlay[0].toUpperCase()+computerPlay.substring(1)} User choice: ${userChoice[0].toUpperCase()+userChoice.substring(1)}`
          roundWin()
        } else {
          compWins += 1
          gameText.textContent= `Computer wins: ${compWins} Player wins: ${userWins}`
          roundInfo.textContent = `Computer choice: ${computerPlay[0].toUpperCase()+computerPlay.substring(1)} User choice: ${userChoice[0].toUpperCase()+userChoice.substring(1)}`
          roundWin()
        }
    } else if (userChoice === 'scissors') {
        if (computerPlay === 'rock') {
          compWins += 1
          gameText.textContent= `Computer wins: ${compWins} Player wins: ${userWins}`
          roundInfo.textContent = `Computer choice: ${computerPlay[0].toUpperCase()+computerPlay.substring(1)} User choice: ${userChoice[0].toUpperCase()+userChoice.substring(1)}`
          roundWin()
        } else {
          userWins += 1
          gameText.textContent= `Computer wins: ${compWins} Player wins: ${userWins}`
          roundInfo.textContent = `Computer choice: ${computerPlay[0].toUpperCase()+computerPlay.substring(1)} User choice: ${userChoice[0].toUpperCase()+userChoice.substring(1)}`
          roundWin()
        }
    }
  } else {
    roundInfo.textContent = `You both chose ${userChoice[0].toUpperCase()+userChoice.substring(1)}. The round is a draw!`
    roundWin()
  }
}

function resetGame() {
  compWins = 0
  userWins = 0
  rockBtn.disabled = false
  paperBtn.disabled = false
  scissorsBtn.disabled = false
  resetGameBtn.style.display = 'none'
  rockBtn.style.background = '#9650ad'
  rockBtn.style.opacity = ('1')
  paperBtn.style.background = '#9650ad'
  paperBtn.style.opacity = ('1')
  scissorsBtn.style.background = '#9650ad'
  scissorsBtn.style.opacity = ('1')
}

function buttonSwap() {
  rockBtn.style.display = 'inline-block';
  paperBtn.style.display = 'inline-block';
  scissorsBtn.style.display = 'inline-block'
  playGameBtn.style.display = 'none'
}

function startGame() {
  document.getElementById('mainText').textContent = 'First to 5 wins! Good luck!'
  buttonSwap();
  textChange();
}
playGameBtn.addEventListener('click',startGame)

rockBtn.addEventListener('click',()=>{
  let userChoice = 'rock'
  playRound(computerPlay(),userChoice)
})
  
paperBtn.addEventListener('click',()=>{
  let userChoice = 'paper'
  playRound(computerPlay(),userChoice)
  }
)
scissorsBtn.addEventListener('click',() => {
  let userChoice = 'scissors'
  playRound(computerPlay(),userChoice)
})

resetGameBtn.addEventListener('click',() => {
  resetGame()
  document.getElementById('mainText').textContent = 'First to 5 wins! Good luck!'
  gameText.textContent= `Computer wins: ${compWins} Player wins: ${userWins}`
  roundInfo.textContent = ''
})
