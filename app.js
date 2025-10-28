let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const computerScorePara = document.querySelector("#computer-score");

const gencompchoice = () =>  {
    const options = ["stone" , "paper" , "scissors"];
    const randIdx =  Math.floor( Math.random() * 3 );
    return options[randIdx];
};

const drawGame = () => {
    msg.innerText = "Its a Draw!";
    msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin) => {
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = "You Win!";
        msg.style.backgroundColor = "green";
    }
    else {
        computerScore++;
        computerScorePara.innerText = computerScore;
        msg.innerText = "You lose!";
        msg.style.backgroundColor = "red";
        }    
    };
    


const playGame = (userChoice) => {
    console.log ("user choice =" , userChoice);
    const compchoice = gencompchoice();
    console.log ("computer choice =" , compchoice);

    if (userChoice === compchoice) {
        drawGame();
    } 
    else {
        let userWin = true;
        if(userChoice === "stone") {
          userWin =  compchoice === "paper" ? false : true;
        }
        else if (userChoice === "paper") {
          userWin =  compchoice === "scissors" ? false : true;
        }
        else {
          userWin =  compchoice === "stone" ? false : true;
        }
        showWinner(userWin);
    }
};



choices.forEach((choice) =>  {
  
    choice.addEventListener("click" , () => { 
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);

    });
});