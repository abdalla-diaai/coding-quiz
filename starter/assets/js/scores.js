// variables to store page items
var clearBtn = document.querySelector('#clear');
var highScore = document.querySelector('#highscores');

// variables to get initials and score from local storage
var storedInitials = localStorage.getItem('user-initials');
var storedScore = localStorage.getItem('final-score');

// check if both initials and score not empty
if (storedInitials && storedScore) {
    var scoreItem = document.createElement('li');
    highScore.appendChild(scoreItem);
    scoreItem.textContent = `${storedInitials}: ${storedScore}`;
};

// clear all scores if any
clearBtn.addEventListener('click', function () {
    localStorage.setItem('user-initials', "");
    localStorage.setItem('final-score', "");
    highScore.removeChild(scoreItem);
});