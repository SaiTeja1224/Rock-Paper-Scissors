let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");
const choices = ["Rock","Paper","Scissors"];
const userIndicator = "user".fontsize(3).sub();
const compIndicator = "comp".fontsize(3).sub();


function win(userChoice,computerChoice){
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${userChoice}${userIndicator} beats ${computerChoice}${compIndicator}. You win!!`;
    document.getElementById(userChoice).classList.add('green-glow');
    setTimeout(function(){document.getElementById(userChoice).classList.remove('green-glow')},500);
}


function lose(userChoice,computerChoice){
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${userChoice}${userIndicator} loses to ${computerChoice}${compIndicator}. You lost..`;
    document.getElementById(userChoice).classList.add('red-glow');
    setTimeout(function(){document.getElementById(userChoice).classList.remove('red-glow')},500);
}


function draw(userChoice,computerChoice){
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${userChoice}${userIndicator} equals ${computerChoice}${compIndicator}. It's a draw..`;   
    document.getElementById(userChoice).classList.add('grey-glow');
    setTimeout(function(){document.getElementById(userChoice).classList.remove('grey-glow')},500);
}


function getComputerChoice(){
const numberGen = Math.floor(Math.random()*3);
return choices[numberGen];
}


function game(userChoice){
    const computerChoice = getComputerChoice();
    switch(userChoice + computerChoice)
    {
        case "RockScissors":
        case "PaperRock":
        case "ScissorsPaper":
            win(userChoice,computerChoice);
            break; 
        case "ScissorsRock":
        case "RockPaper":
        case "PaperScissors":
            lose(userChoice,computerChoice);
            break;
        case "RockRock":
        case "PaperPaper":
        case "ScissorScissors":
            draw(userChoice,computerChoice);
            break;
    }
}


function main(){
rock_div.addEventListener("click", function(){
    game("Rock");
})

paper_div.addEventListener("click", function(){
    game("Paper");
})

scissors_div.addEventListener("click", function(){
    game("Scissors");
})
}

main();

