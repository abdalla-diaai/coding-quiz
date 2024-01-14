// function to show and hide divs on the page
function changeClass(id, currentClass, newClass) {
    document.querySelector(id).classList.remove(currentClass);
    document.querySelector(id).classList.add(newClass);
};

// function to start timer, finish quiz if timer reaches zero or questions finished.
function startTimer() {
    // Sets timer
    timer = setInterval(function () {
        timerCount--;
        if (timerCount > 0) {
            quizTimer.textContent = timerCount;
        }
        else {
            quizTimer.textContent = 0;
        }
        // Tests if time has run out
        if (timerCount >= 0) {
            if (quizFinished) {
                clearInterval(timer);
                finishQuiz()
            };
        }
        else if (timerCount === 0) {
            // Clears interval
            clearInterval(timer);
            finishQuiz()
        }
        else {
            clearInterval(timer);
            finishQuiz();
        }
    }, 1000);
};

// add final score to DOM
function finishQuiz() {
    changeClass('#questions', 'visible', 'hide');
    changeClass('#end-screen', 'hide', 'visible');
    finalScore.textContent = score;
};

// hide end screen div and show feedback div
function storeScore() {
    changeClass('#end-screen', 'visible', 'hide');
    changeClass('#feedback', 'hide', 'visible');
    localStorage.setItem('user-initials', userInitials.value);
    localStorage.setItem("final-score", score);
    location.href = 'highscores.html';
};

// store score in local storage
finalSubmit.addEventListener('click', storeScore);
