/*funkcija getComputerChoice koja vraca choice
let number bira random broj izmedju 0, 1 i 2
ukoliko je number == 0, onda je choice rock,
ukoliko je number == 1, onda je choice paper,
ukoliko je number == 2, onda je choice scissors*/

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

/*funckija getHumanChoice koja uzima izbor korisnika i vraca ga
koiristi prompt metod
zanemariti slucaj ukoliko korisnik ne unese jedan od tri izbora*/

function getHumanCHoice()
{
    let choice = prompt("Please enter rock, paper or scissors: ")
    return choice
}

/*promenljive koje cuvaju score korisnika i kompjutera*/

let humanScore = 0
let computerScore = 0

/*funkcija playRound koja kao argumente uzima izbor korisnika i kompjutera,
nakon odigrane runde, povecava score pobednika i stampa ko je koga pobedio (papir je pobedio kamen i sl.)
humanChoice parametar je case-insensitive*/

/*korisnik i kompjuter
papir i papir -> nereseno *
papir i kamem -> korisnik *
papir i makaze -> kompjuter *
kamen i papir -> kompjuter *
kamen i kamen -> nereseno *
kamen i makaze -> korisnik *
makaze i papir -> korisnik *
makaze i makaze -> nereseno *
makaze i kamen -> kompjuter *
*/

function playRound(humanChoice, computerChoice)
{
    if (humanChoice.toLowerCase() == computerChoice)
    {
        console.log("It's a draw!")
    }

    else if (humanChoice.toLowerCase() == "paper" && computerChoice == "rock")
    {
        console.log("You win! Paper beats Rock")
        humanScore += 1
    }

    else if (humanChoice.toLowerCase() == "paper" && computerChoice == "scissors")
    {
        console.log("You lose! Scissors beats Paper")
        computerScore += 1
    }

    else if (humanChoice.toLowerCase() == "rock" && computerChoice == "paper")
    {
        console.log("You lose! Paper beats Rock")
        computerScore += 1
    }

    else if (humanChoice.toLowerCase() == "rock" && computerChoice == "scissors")
    {
        console.log("You win! Rock beats Scissors")
        humanScore += 1
    }

    else if (humanChoice.toLowerCase() == "scissors" && computerChoice == "paper")
    {
        console.log("You win! Scissors beats Paper")
        humanScore += 1
    }

    else if (humanChoice.toLowerCase() == "scissors" && computerChoice == "rock")
    {
        console.log("You lose! Rock beats Scissors")
        computerScore += 1
    }
}

/*funkcija playGame pet puta ponavlja rundu i na kraju stampa rezultat korisnika i kompjutera
i ko je pobedio */

function playGame()
{
    for (let i = 0; i < 5; i++)
    {
        const computerSelection = getComputerChoice()
        const humanSelection = getHumanCHoice()

        playRound(humanSelection, computerSelection)
    }

    console.log("Your score is: " + humanScore)
    console.log("Computer's score is: " + computerScore)
    
    if (humanScore > computerScore)
    {
        console.log("You win! Congratulations!")
    }

    else if (computerScore > humanScore)
    {
        console.log("You lose!")
    }

    else
    {
        console.log("It's draw!")
    }
}

playGame()