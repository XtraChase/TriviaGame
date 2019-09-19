var title = document.querySelector("h1");
var startBtn = document.querySelector(".start");
var game = document.querySelector(".game");
let seconds = 1;
let minutes = 1;
let displaySeconds = 0;
let displayMinutes = 0;

function showTitle() {
  title.className = "show";
}

function showButton() {
  startBtn.className = "show";
}

setTimeout(showTitle, 500);
setTimeout(showButton, 1000);

//timer
function startTimer() {
  seconds--;

  if (seconds < 0) {
    minutes--;
    seconds = 59;
  }
  if (minutes < 0) {
    minutes = 0;
    seconds = 0;
  }

  //adds a 0 if less than 10
  if (seconds < 10 && seconds >= 0) {
    displaySeconds = "0" + seconds.toString();
  } else {
    displaySeconds = seconds;
  }

  if (minutes < 10 && minutes >= 0) {
    displayMinutes = "0" + minutes.toString();
  } else {
    displayMinutes = minutes;
  }
  document.getElementById("timer").innerHTML =
    "Time Remaining: " + displayMinutes + ":" + displaySeconds;
}

//start button
startBtn.onclick = function() {
  this.parentNode.removeChild(this);
  game.className = "show";
  window.setInterval(startTimer, 1000);
};
