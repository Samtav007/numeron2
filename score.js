// Iteration 8: Making scoreboard functional


var urlParams = new URLSearchParams(window.location.search);
console.log(urlParams);
console.log(window.location.search)
var score = urlParams.get("score");

var scoreboard = document.getElementById("score-board");
scoreboard.innerHTML=score;

var play_again=document.getElementById("play-again-button")

play_again.addEventListener("click",()=>{
    window.location.href="./game.html?";
})