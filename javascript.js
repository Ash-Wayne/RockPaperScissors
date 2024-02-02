
const rockImage = document.createElement('img');
rockImage.src = "img/rock.png";
rockImage.style.width = '300px';
rockImage.style.height = '300px';
const rockImage2 = rockImage.cloneNode();


const paperImage = document.createElement('img');
paperImage.src = "img/paper.png";
paperImage.style.width = '300px';
paperImage.style.height = '300px';
const paperImage2 = paperImage.cloneNode();

const scissorsImage = document.createElement('img');
scissorsImage.src = "img/scissors.png";
scissorsImage.style.width = '300px';
scissorsImage.style.height = '300px';
const scissorsImage2 = scissorsImage.cloneNode();

const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorsButton = document.querySelector('.scissors');
const score = document.querySelector('.score');
const results = document.querySelector('.results');
const winner = document.querySelector('.winner');
const playerSelectionDiv = document.querySelector('.player-selection-div');
const computerSelectionDiv = document.querySelector('.computer-selection-div');

let playerWins = 0;
let computerWins = 0;
let round = 0;

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random()*3);

    switch (randomNumber) {
        case 0: 
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}

function playRound(playerChoice, computerChoice) {

    showImages(playerChoice, computerChoice);

    if (computerChoice === 'rock' && playerChoice === 'paper') {
        playerWins++;
        round++;
        return 'You won round ' + round + '! Paper beats Rock!'
    } else if (computerChoice === 'rock' && playerChoice === 'scissors') {
        computerWins++
        round++;
        return 'You lose round ' + round + '! Rock beats Scissors!';
    } else if (computerChoice === 'paper' && playerChoice === 'rock') {
        computerWins++
        round++;
        return 'You lose round ' + round + '! Paper beats Rock!';
    } else if (computerChoice === 'paper' && playerChoice === 'scissors') {
        playerWins++
        round++;
        return 'You won round ' + round + '! Scissors beats Paper!';
    } else if (computerChoice === 'scissors' && playerChoice === 'rock') {
        playerWins++
        round++;
        return 'You won round ' + round + '! Rock beats Scissors!';
    } else if (computerChoice === 'scissors' && playerChoice === 'paper') {
        computerWins++;
        round++;
        return 'You lose round ' + round + '! Scissors beats Paper!';
    } else if (computerChoice === playerChoice) {
        return 'TIE! Play the round again!'
    }
}

function showImages(playerChoice, computerChoice) {
    
    // checking if images are currently being displayed and only removing them if they are
    if (playerSelectionDiv.childElementCount > 1 && computerSelectionDiv.childElementCount > 1) {
        playerSelectionDiv.removeChild(playerSelectionDiv.lastChild);
        computerSelectionDiv.removeChild(computerSelectionDiv.lastChild);
    }

    switch (playerChoice) {
        case 'rock':
            playerSelectionDiv.appendChild(rockImage);
            break;
        case 'paper':
            playerSelectionDiv.appendChild(paperImage);
            break;
        case 'scissors':
            playerSelectionDiv.appendChild(scissorsImage);
            break;
    }

    switch (computerChoice) {
        case 'rock':
            computerSelectionDiv.appendChild(rockImage2);
            break;
        case 'paper':
            computerSelectionDiv.appendChild(paperImage2);
            break;
        case 'scissors':
            computerSelectionDiv.appendChild(scissorsImage2);
            break;
    }
}

function ifGameOverAnnounceWinner() {
    if (playerWins === 3) {
        winner.textContent = `Game Over! Player Wins! 
        
        Final Score: ${playerWins}-${computerWins}`;
        disableButtons();
    } else if (computerWins === 3) {
        winner.textContent = `Game Over! Computer Wins! 
        
        Final Score: ${computerWins}-${playerWins}`;
        disableButtons();
    }
}

function disableButtons() {
    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;
}

rockButton.addEventListener('click', () => {
    results.textContent = (playRound('rock', getComputerChoice()));
    score.textContent = `Player: ${playerWins}                    Computer: ${computerWins}`
    ifGameOverAnnounceWinner();
});

paperButton.addEventListener('click', () => {
    results.textContent = (playRound('paper', getComputerChoice()));
    score.textContent = `Player: ${playerWins}                    Computer: ${computerWins}`
    ifGameOverAnnounceWinner();
});

scissorsButton.addEventListener('click', () => {
    results.textContent = (playRound('scissors', getComputerChoice()));
    score.textContent = `Player: ${playerWins}                    Computer: ${computerWins}`
    ifGameOverAnnounceWinner();
});
