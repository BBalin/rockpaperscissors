

const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");

rockButton.addEventListener('click', function () {
   const hChoice = "rock";
   console.log(hChoice);
   playRound(hChoice);
});

paperButton.addEventListener('click', function() {
   const hChoice = "paper";
   console.log(hChoice);
   playRound(hChoice);
});

scissorsButton.addEventListener('click', function() {
   const hChoice = "scissors";
   console.log(hChoice);
   playRound(hChoice);
})


function playRound(hChoice) {
   let choices = ['rock', 'paper', 'scissors']
   let cChoice = choices[Math.floor(Math.random() * choices.length)];
   
   if (hChoice === cChoice) {
      console.log("It's a tie!");
   } else if (
      (hChoice === "rock" && cChoice === "scissors") ||
      (hChoice === "paper" && cChoice === "rock") ||
      (hChoice === "scissors" && cChoice === "paper")
   ){
      console.log("You win!")
   } else {
      console.log("Computer Wins!");
   }
}






