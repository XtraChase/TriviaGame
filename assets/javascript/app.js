var title = document.querySelector("h1");
var startBtn = document.querySelector(".start");
var game = document.querySelector(".game");
var total = document.getElementById("total");
var rightAnswers = 0;
var wrongAnswers = 0;
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
  if (seconds > 0 || minutes > 0) {
    document.getElementById("timer").innerHTML =
      "Time Remaining: " + displayMinutes + ":" + displaySeconds;
  }

  //if timer reaches 0
  if (seconds === 0 && minutes === 0) {
    if (game.parentNode) {
      game.parentNode.removeChild(game);
    }
    total.innerHTML =
      "Correct: " + rightAnswers + "</br>" + "Wrong: " + wrongAnswers;
  }
}

//start button
startBtn.onclick = function() {
  this.parentNode.removeChild(this);
  game.className = "show";
  window.setInterval(startTimer, 1000);
  //add event listeners to all buttons
  var inputs = document.getElementsByTagName("input");

  for (i = 1; i < inputs.length; i++) {
    if (inputs[i].type == "radio") {
      inputs[i].addEventListener("click", trivia);
    }
  }
};

//if user input = answer or if it doesn't
function trivia(e) {
  e.target.checked;
  if (e.target.id == "correct") {
    rightAnswers++;
    console.log("correct");
  } else {
    wrongAnswers++;
    console.log("wrong");
  }
}
