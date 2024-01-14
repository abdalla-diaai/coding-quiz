var storedInitials = localStorage.getItem('user-initials');
var storedScore = localStorage.getItem('final-score');
var clearBtn = document.querySelector('#clear');
var items = [];



highScore = document.querySelector('#highscores');

var scoreItem = document.createElement('li');
highScore.append(scoreItem);
scoreItem.textContent = `${storedInitials} ${storedScore}`;


clearBtn.addEventListener('click', function() {
    highScore.textContent = "";
    localStorage.setItem('user-initials', "");
    storedScore = localStorage.setItem('final-score', "");
})