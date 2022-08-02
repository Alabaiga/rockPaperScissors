const playGameBtn = document.getElementById('playGame');
const rockBtn = document.getElementById('rockButton');
const paperBtn = document.getElementById('paperButton');
const scissorsBtn = document.getElementById('scissorsButton');

// Function to setup computer play of rock, paper and scissors via randomly choosing from an array
function computerPlay() {
    playType = ['rock','paper','scissors']
    return result = playType[Math.floor(Math.random()* 2.5)]
}
// variables to count wins
let compWins = 0
let userWins = 0
// function that plays a round of rock,paper scissors
function playRound(computerPlay,userChoice) {
  if (computerPlay != userChoice) {
    if (userChoice === 'rock') {
        if (computerPlay === 'paper') {
          compWins += 1
          console.log('You lose! Paper beats rock.')
        } else {
          userWins += 1
          console.log('You win! Rock beats scissors.')
        }
    } else if (userChoice === 'paper') {
        if (computerPlay ==='rock') {
          userWins += 1
          console.log('You win! Paper beats rock!')
        } else {
          compWins += 1
          console.log('You lose! Scissors beat paper.')
        }
    } else if (userChoice === 'scissors') {
        if (computerPlay === 'rock') {
          compWins += 1
          console.log('You lose! Rock beats scissors.')
        } else {
          userWins += 1
          console.log('You win! Scissors beats paper!')
        }
    }
  } else {
    console.log('The round is a draw!')
  }
}

// function to reset game
function resetGame() {
  compWins = 0
  userWins = 0
}

function buttonSwap() {
  rockBtn.style.display = 'inline-block';
  paperBtn.style.display = 'inline-block';
  scissorsBtn.style.display = 'inline-block'
  playGameBtn.style.display = 'none'
}

function textChange() {
  const gameTextContainer = document.querySelector('.gameStatHolder')
  const gameText = document.createElement('p')
  gameText.classList.add('gameText')
  gameText.textContent= `Computer wins: ${compWins}` + '\r\n' + `Player wins: ${userWins}`
  gameText.style.fontSize = '28px'
  gameText.style.color = 'white'
  gameText.style.fontWeight = 'bold'
  gameTextContainer.appendChild(gameText)
}
function startGame() {
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
})
scissorsBtn.addEventListener('click',() => {
  let userChoice = 'scissors'
  playRound(computerPlay(),userChoice)
})

