var timerEl = document.getElementById("time");
var StartBtn = document.getElementById("Start");
var questionsEl = document.getElementById("questions");
var choicesEl = document.getElementById("choices");

var currentQuestionIndex = 0;
var time = questions.length * 10;
var timerId;

function getQuestion() {
  var currentQuestion = questions[currentQuestionIndex];

  var titleEl = document.getElementById("question-title");
  titleEl.textContent = currentQuestion.title;

  choicesEl.innerHTML = "";

  for (var i = 0; i < currentQuestion.choices.length; i++) {
    var choice = currentQuestion.choices[i];
    var choiceNode = document.createElement("button");
    choiceNode.setAttribute("class", "choice");
    choiceNode.setAttribute("value", choice);

    choiceNode.textContent = i + 1 + ". " + choice;

    choicesEl.appendChild(choiceNode);
  }
}

// Timer that counts down from 165
function timer() {
  var timeLeft = 165;
  // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var timeInterval = setInterval(function () {
    // As long as the `timeLeft` is greater than 1
    if (timeLeft > 1) {
      // Set the `textContent` of `timerEl` to show the remaining seconds
      timerEl.textContent = timeLeft + " seconds";
      // Decrement `timeLeft` by 1
      timeLeft--;
    } else if (timeLeft === 1) {
      // When `timeLeft` is equal to 1, rename to 'second remaining' instead of 'seconds'
      timerEl.textContent = timeLeft + " second remaining";
      timeLeft--;
    } else {
      // Once `timeLeft` gets to 0, set `timerEl` to an empty string
      timerEl.textContent = "";
      // Use `clearInterval()` to stop the timer
      clearInterval(timeInterval);
    }
  }, 1000);

  const Intro = document.getElementsByClassName("Intro")[0];
  Intro.style.display = "none";

  const start = document.getElementsByClassName("Start")[0];
  start.style.display = "none";

  questionsEl.removeAttribute("class");

  getQuestion();
}

// event listener that allows the timer to start when starting quiz
StartBtn.addEventListener("click", timer);
