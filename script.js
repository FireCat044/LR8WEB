var player1NameInput = document.getElementById("player1-name");
var player2NameInput = document.getElementById("player2-name");
var startButton = document.getElementById("start-button");
var startContainer = document.getElementById("start-container");
var gameContainer = document.getElementById("game-container");
var player1Score = document.getElementById("player1-score");
var player2Score = document.getElementById("player2-score");
var result = document.getElementById("result");
var playButton = document.getElementById("play-button");

let player1Wins = 0;
let player2Wins = 0;

startButton.addEventListener("click", startGame);
playButton.addEventListener("click", playRound);

function startGame() {
    var player1Name = player1NameInput.value;
    var player2Name = player2NameInput.value;
    if (player1Name.trim() === "" || player2Name.trim() === "") {
        alert("Будь ласка, введіть імена обох гравців.");
        return;
    }

    startContainer.classList.add("hidden");
    gameContainer.classList.remove("hidden");

    player1Score.textContent = `${player1Name}: ${player1Wins}`;
    player2Score.textContent = `${player2Name}: ${player2Wins}`;
}

function playRound() {
    var player1Number = Math.floor(Math.random() * 10) + 1;
    var player2Number = Math.floor(Math.random() * 10) + 1;

    result.textContent = `${player1NameInput.value} отримав ${player1Number}, ${player2NameInput.value} отримав ${player2Number}`;

    if (player1Number > player2Number) {
        player1Wins++;
    } else if (player1Number < player2Number) {
        player2Wins++;
    }

    player1Score.textContent = `${player1NameInput.value}: ${player1Wins}`;
    player2Score.textContent = `${player2NameInput.value}: ${player2Wins}`;

    if (player1Wins >= 3) {
        result.textContent = `Вітаємо, ${player1NameInput.value} виграв гру!`;
        playButton.disabled = true;
    } else if (player2Wins >= 3) {
        result.textContent = `Вітаємо, ${player2NameInput.value} виграв гру!`;
        playButton.disabled = true;
    }
}
