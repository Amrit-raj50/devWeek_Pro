const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissor = document.querySelector('.sissor');
const res = document.querySelector('.result');

const comChoice = ["rock","paper","sissor"];

function game(uCo){
    const cC = comChoice[Math.floor(Math.random()*3)];
    if(uCo == "paper"){
        if(cC == "paper"){
            res.textContent = "DRAW";
        }else if(cC == "rock"){
            res.textContent = "YOU WIN";
        }else{
            res.textContent = "COMPUTER WIN";
        }
    }else if(uCo == "rock"){
        if(cC == "paper"){
            res.textContent = "COMPUTER WIN";
        }else if(cC == "rock"){
            res.textContent = "DRAW";
        }else{
            res.textContent = "YOU WIN";
        }
    }else{
        if(cC == "paper"){
            res.textContent = "YOU WIN";
        }else if(cC == "rock"){
            res.textContent = "COMPUTER WIN";
        }else{
            res.textContent = "DRAW";
        }
    }
}

rock.addEventListener("click",()=> 
    game("rock"))

paper.addEventListener("click",()=> 
    game("paper")
)

scissor.addEventListener("click",()=> 
    game("sissor"))