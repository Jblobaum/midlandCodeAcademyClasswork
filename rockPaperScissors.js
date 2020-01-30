let buttons = Array.from(document.getElementsByClassName("choice"));
let computer = document.getElementById("computer")
let counter = document.getElementById("game"), count = 1
let userWins = document.getElementById("win"), win = 0
let compWins = document.getElementById("loss"), lose = 0
let ties = document.getElementById("tie"), tie = 0
for (i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        document.getElementById('user').innerText = `You Choose ${this.id}`;
        let compChoice = parseInt(Math.floor(Math.random() * 3));
        if (compChoice === 0) {
            compChoice = "rock"
            computer.innerHTML = "Computer picked" + " " + compChoice + ".";
        }
        else if (compChoice === 1) {
            compChoice = "paper"
            computer.innerHTML = "Computer picked" + " " + compChoice + ".";
        }
        else if (compChoice === 2) {
            compChoice = "scissors"
            computer.innerHTML = "Computer picked" + " " + compChoice + ".";
        }
        if (compChoice === this.id) {
            tie += 1
            ties.innerHTML = tie
            alert("YOU tied :/ Pick again to start a new game")
        }
        else if ((compChoice === "rock" && this.id === "paper") ||
            (compChoice === "paper" && this.id === "scissors") ||
            (compChoice === "scissors" && this.id === "rock")) {
            win += 1
            userWins.innerHTML = win
            alert("YOU WIN! Pick again to start a new game")
        }
        else {
            lose += 1
            compWins.innerHTML = lose
            alert("YOU LOSE! Pick again to start a new game")
        }
        count += 1;
        counter.innerHTML = count;
    })
}
