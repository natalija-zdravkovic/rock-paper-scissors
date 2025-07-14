function getComputerChoice()
{
    let number = Math.floor(Math.random() * 3)
    let choice

    if (number == 0)
    {
        choice = "rock"
    }

    else if (number == 1)
    {
        choice = "paper"
    }

    else
    {
        choice = "scissors"
    }

    return choice
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice)
{
    if (humanChoice.toLowerCase() == computerChoice)
    {
        return "It's a draw!"
    }

    else if (humanChoice.toLowerCase() == "paper" && computerChoice == "rock")
    {
        humanScore += 1
        return "You win! Paper beats Rock"
    }

    else if (humanChoice.toLowerCase() == "paper" && computerChoice == "scissors")
    {
        computerScore += 1
        return "You lose! Scissors beats Paper"
    }

    else if (humanChoice.toLowerCase() == "rock" && computerChoice == "paper")
    {
        computerScore += 1
        return "You lose! Paper beats Rock"
    }

    else if (humanChoice.toLowerCase() == "rock" && computerChoice == "scissors")
    {
        humanScore += 1
        return "You win! Rock beats Scissors"
    }

    else if (humanChoice.toLowerCase() == "scissors" && computerChoice == "paper")
    {
        humanScore += 1
        return "You win! Scissors beats Paper"
    }

    else if (humanChoice.toLowerCase() == "scissors" && computerChoice == "rock")
    {
        computerScore += 1
        return "You lose! Rock beats Scissors"
    }
}

const playButton = document.querySelector(".play.button")
let computer = document.querySelector(".computer .points")
let message = document.querySelector("#game")
let human = document.querySelector(".user .points")

playButton.addEventListener("click", () => {
    message.textContent = "Choose paper, rock or scissors";
    humanScore = 0;
    computerScore = 0;
    computer.textContent = computerScore;
    human.textContent = humanScore;
    buttons.forEach(button => {
        button.addEventListener("click", play)
    })
})

const paperButton = document.querySelector(".paper.button")
const rockButton = document.querySelector(".rock.button")
const scissorsButton = document.querySelector(".scissors.button")

let humanSelection;
let computerSelection;

paperButton.addEventListener("click", () => {
    humanSelection = "paper"
})

rockButton.addEventListener("click", () => {
    humanSelection = "rock"
})

scissorsButton.addEventListener("click", () => {
    humanSelection = "scissors"
})

const buttons = document.querySelectorAll(".choice .button")

function play() 
{
    computerSelection = getComputerChoice();
    message.textContent = playRound(humanSelection, computerSelection);
    computer.textContent = computerScore;
    human.textContent = humanScore;

    if (humanScore == 5 || computerScore == 5)
    {
        buttons.forEach(button => {
            button.removeEventListener("click", play)
        })
    }

    if (humanScore == 5)
    {
        message.textContent = "You won the game!"
    }

    else if (computerScore == 5)
    {
        message.textContent = "Computer won the game!"
    }
}


