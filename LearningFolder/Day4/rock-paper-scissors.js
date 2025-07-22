const score = {
    wins: 0,
    loses: 0,
    ties: 0
};

function playGame(playerMove) {

    const computerMove = pickComputerMove();

    let result = '';

    if (playerMove === 'rock') {
        if (computerMove === 'rock') {
            result = 'Tie'
        }
        else if (computerMove === 'paper') {
            result = 'You lose'
        }
        else if (computerMove === 'scissor') {
            result = 'You win'
        }
    }

    else if (playerMove === 'paper') {
        if (computerMove === 'rock') {
            result = 'You win'
        }
        else if (computerMove === 'paper') {
            result = 'Tie'
        }
        else if (computerMove === 'scissor') {
            result = 'You lose'
        }
    }

    else if (playerMove === 'scissor') {
        if (computerMove === 'rock') {
            result = 'You lose'
        }
        else if (computerMove === 'paper') {
            result = 'You win'
        }
        else if (computerMove === 'scissor') {
            result = 'Tie'
        }
    }

    if(result === 'You win'){
        score.wins++;
    }
    else if(result === "You lose") {
        score.loses++;
    }
    else if(result === 'Tie'){
        score.ties++;
    }

    alert(`You picked ${playerMove}: Computer picked ${computerMove}. ${result}
    Wins: ${score.wins}, Loses: ${score.loses}, Ties: ${score.ties}`)
}

function pickComputerMove() {

    const randomNum = Math.random();

    let computerMove = '';

    if (randomNum >= 0 && randomNum <= 1 / 3) {
        computerMove = 'rock';
    }
    else if (randomNum >= 1 / 3 && randomNum <= 2 / 3) {
        computerMove = 'paper';
    }
    else if (randomNum >= 2 / 3 && randomNum < 1) {
        computerMove = 'scissor';
    }

    return computerMove;
}

function normal(a, b){
    let result = a+ b;
    console.log(result);
}

normal(5, 10);

const arrow = () => {

}

console.log(arrow());
