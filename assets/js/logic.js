// DOM elements
var timerEl = document.getElementById("time");
var StartBtn = document.getElementById("Start");
var questionsEl = document.getElementById("questions");
var choicesEl = document.getElementById("choices");

// Keeps track of quiz state
var currentQuestionIndex = 0;
var time = questions.length * 15;
var timeId;

function getQuestion() {
    // Grabs current question from array
  var currentQuestion = questions[currentQuestionIndex];
// Updates the title to the current question
  var titleEl = document.getElementById("question-title");
  titleEl.textContent = currentQuestion.title;
// Clears out old question choices
  choicesEl.innerHTML = "";
// loops over the choices
  for (var i = 0; i < currentQuestion.choices.length; i++) {
    var choice = currentQuestion.choices[i];
    // Creates the "button" for the choices
    var choiceNode = document.createElement("button");
    // Needed to allow you to click on the choice buttons
    choiceNode.setAttribute("class", "choice");
    choiceNode.setAttribute("value", choice);
// Are all of the choice text in their respective buttions
    choiceNode.textContent = i + 1 + ". " + choice;
// Displays choices on the page
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

  // The variable intro grabs the class "Intro" and everything in it and changes the display to "none" making it dissapear off the html when the start quiz button is clicked
  const Intro = document.getElementsByClassName("Intro")[0];
  Intro.style.display = "none";
// The variable start grabs the class "Start" and everything in it and changes the display to "none" to do the same thing as the "Intro" class
  const start = document.getElementsByClassName("Start")[0];
  start.style.display = "none";

//   This removes the hiding attribute from the questions
  questionsEl.removeAttribute("class");
// Runs the Question function to gather the questions and choices
  getQuestion();

  
}

function questionClick(event) {
  var buttonEl = event.target;
// If clicked element is not a choice button do nothing
  if (!buttonEl.matches(".choice")) {
    return;
  }
// Checks if question answered incorrectly
  if (buttonEl.value !== questions[currentQuestionIndex].answer) {
    // Time penalization
    time -= 10;
// Allows the timer to stop at 0 and not go negative
    if (time < 0) {
      time = 0;
    }
// displays the new time on the page
    timerEl.textContent = time;
  }
// move to the next question
  currentQuestionIndex++;

//   Continues the question array
    getQuestion();
  
}

// event listener that allows the timer to start when starting quiz
StartBtn.addEventListener("click", timer);
// Allows user to click on choices and runs event
choicesEl.onclick = questionClick;
