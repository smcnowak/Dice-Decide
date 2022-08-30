var started = false
var playerOne = "Player 1"
var playerTwo = "Player 2"

function getNames(){
  playerOne = prompt("Who is Player 1?");
  playerTwo = prompt("Who is Player 2?");

  document.querySelector("p.play1").innerHTML = playerOne
  document.querySelector("p.play2").innerHTML = playerTwo
  }

function rollDice(){
  var randomNumber1 = Math.floor(Math.random()*6)+1;
  var diceChoice1 = "images/dice" + randomNumber1 + ".png"

  var randomNumber2 = Math.floor(Math.random()*6)+1;
  var diceChoice2 = "images/dice" + randomNumber2 + ".png"

  document.querySelector("img.img1").setAttribute("src", diceChoice1);
  document.querySelector("img.img2").setAttribute("src", diceChoice2);

  if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = playerOne + " Wins!";
  } else if (randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = playerTwo + " Wins!";
  } else if (randomNumber1 === randomNumber2){
    document.querySelector("h1").innerHTML = "Draw!";
  }
}

document.querySelector(".btn").addEventListener('click', function() {
  if (!started){
    getNames();
    rollDice();
    started = true
  } else if (started){
    rollDice();
  }
});
