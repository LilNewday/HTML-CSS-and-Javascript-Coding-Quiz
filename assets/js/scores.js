function Scoreprinter() {
  // Gathers previous scores from localstorage or creates new ones
  var highscores = JSON.parse(window.localStorage.getItem("Score")) || [];

  for (var i = 0; i < highscores.length; i += 1) {
    // creates the list tag for each new score recorded
    var liTag = document.createElement("li");
    liTag.textContent = highscores[i].initials + " - " + highscores[i].score;

    // displays the scores on page
    var olEl = document.getElementById("Score");
    olEl.appendChild(liTag);
  }
}
// Clears the High Scores
function clear() {
  // Removes the Score Id
  window.localStorage.removeItem("Score");
  // Reloads the page
  window.location.reload();
}
// Allows you to click 'Clear Highscores' button and clears the Highscores
document.getElementById("clear").onclick = clear;

// runs when page loads
Scoreprinter();
