/*funkcija getComputerChoice koja vraca choice
let number bira random broj izmedju 0, 1 i 2
ukoliko je number == 0, onda je choice rock,
ukoliko je number == 1, onda je choice paper,
ukoliko je number == 2, onda je choice scissors*/

function getComputerChoice()
{
    let number = Math.floor(Math.random() * 3)
    
    if (number == 0)
    {
        return "rock"
    }

    else if (number == 1)
    {
        return "paper"
    }

    else
    {
        return "scissors"
    }

}

let choice = getComputerChoice()
console.log(choice)