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

let computerChoice = getComputerChoice()
console.log(computerChoice)

/*funckija getHumanChoice koja uzima izbor korisnika i vraca ga
koiristi prompt metod
zanemariti slucaj ukoliko korisnik ne unese jedan od tri izbora*/

function getHumanCHoice()
{
    let choice = prompt("Please enter rock, paper or scissors: ")
    return choice
}

let humanChoice = getHumanCHoice()
console.log(humanChoice)