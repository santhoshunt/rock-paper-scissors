let playerScore = 0;
let computerScore = 0;
function updateScore() {
    const pScore = document.querySelector(".player-score p");
    const cScore = document.querySelector(".computer-score p");
    pScore.textContent = playerScore;
    cScore.textContent = computerScore;
}
function checkWin(playerChoice, computerChoice) {
    const winner = document.querySelector(".winner");
    if (computerChoice === playerChoice) {
        winner.textContent = "It is a TIE";
        return;
    }
    else if (playerChoice === 'rock') {
        if (computerChoice === "scissors") {
            winner.textContent = "PLAYER gets a point!";
            playerScore++;
        }
        else {
            winner.textContent = "Computer gets a point!";
            computerScore++;
        }
        return;
    }
    else if (playerChoice === 'scissors') {
        if (computerChoice === 'paper') {
            winner.textContent = "PLAYER gets a point!";
            playerScore++;
        }
        else {
            winner.textContent = "Computer gets a point!";
            computerScore++;
        }
        return;
    }
    else if (playerChoice === 'paper') {
        if (computerChoice === 'scissors') {
            winner.textContent = "Computer gets a point!";
            computerScore++;
        }
        else {
            winner.textContent = "PLAYER gets a point!";
            playerScore++;
        }
        return;
    }
}
//start game function
const startGame = () => {
    const playBtn = document.querySelector(".intro button");
    const introScreen = document.querySelector(".intro");
    const match = document.querySelector(".match");

    playBtn.addEventListener("click", () => {
        introScreen.classList.add("fadeOut");
        match.classList.add("fadeIn");
    });

    //play Game
    function playMatch() {
        const hands = document.querySelectorAll(".hands img");
        hands.forEach(hand => {
            hand.addEventListener('animationend', function () {
                this.style.animation = "";
            });
        });
        const options = document.querySelectorAll(".options button");
        const playerHand = document.querySelector(".player-hand");
        const computerHand = document.querySelector(".computer-hand");

        //computer play
        const computerOptions = ['rock', 'paper', 'scissors'];

        options.forEach(option => {
            option.addEventListener('click', function () {
                playerHand.src = `./img/rock.png`;
                computerHand.src = `./img/rock.png`;
                //computer's choice
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];

                //call checkwin
                playerHand.style.animation = "shakePlayer 2s ease";
                computerHand.style.animation = "shakeComputer 2s ease";

                setTimeout(() => {
                    checkWin(this.textContent, computerChoice);
                    //change images
                    playerHand.src = `./img/${this.textContent}.png`;
                    computerHand.src = `./img/${computerChoice}.png`;


                    updateScore();
                }, 2000);

            });
        });
    }
    playMatch();
}
startGame();
