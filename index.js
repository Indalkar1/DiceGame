random1 = Math.ceil(Math.random()*6)
console.log(random1)
switch(random1){
    case 1:
        document.getElementById("player1").src="./images/dice1.png"
        break;
    case 2:
        document.getElementById("player1").src="./images/dice2.png"
        break;
    case 3:
        document.getElementById("player1").src="./images/dice3.png"
        break;
    case 4:
        document.getElementById("player1").src="./images/dice4.png"
        break;
    case 5:
        document.getElementById("player1").src="./images/dice5.png"
        break;
    case 6:
        document.getElementById("player1").src="./images/dice6.png"
        break;
    
}

random2 = Math.ceil(Math.random()*6)
console.log(random2)
switch(random2){
    case 1:
        document.getElementById("player2").src="./images/dice1.png"
        break;
    case 2:
        document.getElementById("player2").src="./images/dice2.png"
        break;
    case 3:
        document.getElementById("player2").src="./images/dice3.png"
        break;
    case 4:
        document.getElementById("player2").src="./images/dice4.png"
        break;
    case 5:
        document.getElementById("player2").src="./images/dice5.png"
        break;
    case 6:
        document.getElementById("player2").src="./images/dice6.png"
        break;
    
}

if(random1 > random2){
   document.querySelector("h1").innerHTML = "🚩Player 1 wins!";
}

else if(random2 > random1){
    document.querySelector("h1").innerHTML = "🚩Player 1 wins!";
 }