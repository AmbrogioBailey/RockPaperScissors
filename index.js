
const choice = ['rock', 'paper', 'scissors']

const playR = document.getElementById('play-game')

let humanScore = 0

let computerScore = 0



function getComputerChoice() {
    return choice[Math.floor(Math.random() * choice.length)]
}

function getHumanChoice(){
    const userChoice = prompt('Do you pick rock, paper, or scissors? ')
    if (choice.includes(userChoice)){
        return userChoice
    }else {
        alert('Invalid choice! Enter rock, paper, or scissors...press ok and try again ')
        return getHumanChoice()
    }
}

function playRound(){
    const humanChoice = getHumanChoice().toLowerCase()
    const computerChoice = getComputerChoice()

    if (humanChoice === computerChoice){
        humanScore += 1
        computerScore += 1
        return "It's a tie!"
    }
    if (humanChoice === 'rock' && computerChoice === 'scissors' ){
        humanScore += 1
        return `You win! ${humanChoice} beats ${computerChoice}`
    }
    if (humanChoice === 'paper' && computerChoice === 'rock'){
        humanScore += 1
        return `You win! ${humanChoice} beats ${computerChoice}`
    }
    if (humanChoice === 'scissors' && computerChoice === 'paper'){
        humanScore += 1
        return `You win! ${humanChoice} beats ${computerChoice}`
    }
    else{
        computerScore += 1
        return `You lose! ${computerChoice} beats ${humanChoice}`

    }

}

function playGame(){
    for (let i = 0; i < 3; i++) {
        alert(playRound())
    }
    
    if (humanScore > computerScore){
        return "You win the game!"
    }
    if (humanScore < computerScore){
        return "You lose the game!"
    }
    else{
        return "It is a draw wow!"
    }
}

playR.addEventListener('click', function() {
    alert(playGame())
})



