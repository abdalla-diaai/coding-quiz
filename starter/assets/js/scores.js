var storedInitials = localStorage.getItem('user-initials');
var storedScore = localStorage.getItem('final-score');
var clearBtn = document.querySelector('#clear');

var highScore = document.querySelector('#highscores');

if (storedInitials && storedScore) {
    var scoreItem = document.createElement('li');
    highScore.appendChild(scoreItem);
    scoreItem.textContent = `${storedInitials}: ${storedScore}`;
};


clearBtn.addEventListener('click', function() {
    localStorage.setItem('user-initials', "");
    localStorage.setItem('final-score', "");
    highScore.removeChild(scoreItem);

});