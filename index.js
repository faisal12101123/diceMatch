var randomNumber1 = Math.floor( Math.random() * 6 ) + 1;
var randomDiceImg = "dice"+randomNumber1+".png";
var randomDiceImgSrc = "images/"+randomDiceImg;
var dice1 = document.querySelectorAll("img")[0];
dice1.setAttribute("src",randomDiceImgSrc);

var randomNumber2 = Math.floor( Math.random() * 6 ) + 1;
var randomDiceImgSrc2 = "images/dice"+randomNumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randomDiceImgSrc2);

if (randomNumber1>randomNumber2) {
  document.querySelector("h1").innerHTML="🚩 Player 1 Wins!"
}
else if (randomNumber2>randomNumber1) {
  document.querySelector("h1").innerHTML="🚩 Player 2 Wins!"
}
else {
  document.querySelector("h1").innerHTML="🚩 Draw 🚩"
}
