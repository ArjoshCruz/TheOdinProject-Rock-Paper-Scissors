let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let randomNum = Math.random();
    let computerChoice = '';
    
    if (randomNum < 0.3333 ) {
        computerChoice = 'rock';
    } else if (randomNum < 0.6666) {
        computerChoice = 'paper';
    } else {
        computerChoice = 'scissors';
    } 

    return computerChoice;
}

function getHumanChoice() {
    let promptMsg = prompt("Enter your choice: Rock / Paper/ Scissors")
    if(promptMsg === null) {
        return promptMsg;
    } else {
        promptMsg = promptMsg.toLowerCase();
    }
    
    let humanChoice = '';

    if (promptMsg === 'rock' || promptMsg === 'paper' || promptMsg === 'scissors') {
        humanChoice = promptMsg;
    } else {
        alert("Please input the right choice.")
        return null;
    }

    return humanChoice;
}


function playRound(humanPick, computerPick){
    console.log(`You chose ${humanPick}`);
    console.log(`Computer chose ${computerPick}`);

    // ROCK MECHANICS
    if (humanPick === 'rock' && computerPick === 'paper'){
        console.log(`You lose! Paper beats Rock`)
        computerScore += 1;
        console.log(`Your Score: ${humanScore} | Computer Score: ${computerScore}`)
    } else if (humanPick === 'rock' && computerPick === 'scissors') {
        console.log(`You win! Rock beats Scissors`)
        humanScore += 1;
        console.log(`Your Score: ${humanScore} | Computer Score: ${computerScore}`)
    } else if (humanPick === "rock") {
        console.log(`It's a tie! You both picked Rock`)
        console.log(`Your Score: ${humanScore} | Computer Score: ${computerScore}`)
    } 

    // PAPER MECHANICS
    else if (humanPick === 'paper' && computerPick === 'scissors'){
        console.log(`You lose! Scissors beats Paper`)
        computerScore += 1;
        console.log(`Your Score: ${humanScore} | Computer Score: ${computerScore}`)
    } else if (humanPick === 'paper' && computerPick === 'rock') {
        console.log(`You win! Paper beats Rock`)
        humanScore += 1;
        console.log(`Your Score: ${humanScore} | Computer Score: ${computerScore}`)
    } else if (humanPick === "paper"){
        console.log(`It's a tie! You both picked Paper`)
        console.log(`Your Score: ${humanScore} | Computer Score: ${computerScore}`)
    } 
    
    //SCISSOR MECHANICS
    else if (humanPick === 'scissors' && computerPick === 'rock'){
        console.log(`You lose! Rock beats Scissors`)
        computerScore += 1;
        console.log(`Your Score: ${humanScore} | Computer Score: ${computerScore}`)
    } else if (humanPick === 'scissors' && computerPick === 'paper') {
        console.log(`You win! Scissors beats Paper`)
        humanScore += 1;
        console.log(`Your Score: ${humanScore} | Computer Score: ${computerScore}`)
    } else if (humanPick === 'scissors'){
        console.log(`It's a tie! You both picked Scissors`)
        console.log(`Your Score: ${humanScore} | Computer Score: ${computerScore}`)
    }

    else {
        console.log('Somethings wrong!')
    }
}

function playGame(){
    humanScore = 0;
    computerScore = 0;

    for (let i = 0; i < 5; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        
        console.log(`Game ${i+1}`)
        playRound(humanSelection, computerSelection);
        console.log("========================================")
    }

    console.log(`Final Score - Human: ${humanScore} | Computer: ${computerScore};`)

}

playGame();
