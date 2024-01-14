var questionBank = [
    {
        title: 'With JavaScript, which of the following is true if x and y are not equal?',
        choices: ['if x!=y', 'if (x!=y)', 'if x not=y'],
        answer: 2
    },
    {
        title: 'With JavaScript, the first control statement in a for loop usually does what?',
        choices: ['sets the termination condition', 'increments a counter', 'creates a control variable'],
        answer: 3
    },
    {
        title: ' What is the correct JavaScript syntax to change the content of the HTML element below? <p id="demo">This is a demonstration</p>',
        choices: ['document.getElementByName("p").innerHTML = "Hello World";', 'document.getElementById("demo").innerHTML = "Hello World";', 'document.getElement("p").innerHTML = "Hello World";', '#demo.innerHTML = "Hello World";'],
        answer: 2
    },
    {
        title: 'How many buttons are there in a JavaScript alert box?',
        choices: ['One', 'Two', 'None'],
        answer: 2
    },
    {
        title: ' Which event is triggered when a form field is changed?',
        choices: ['onsubmit', 'onblur', 'onclick', 'onchange'],
        answer: 4
    },
    {
        title: "With JavaScript, look at the following code: var x='Anna'; var y=30; x=y; Variable 'x' now contains?",
        choices: ['a text', 'a number', 'a boolean'],
        answer: 1
    },
    {
        title: "With JavaScript, how do you round the number 7.25 to the nearest integer?",
        choices: ['Math.round(7.25)', 'Math.floor(7.25)', 'Math.ceil(7.25)'],
        answer: 1
    },
    {
        title: "With JavaScript, how can you find the number with the highest value of x and y?",
        choices: ['Math.max(x,y)', 'Math.ceil(x,y)', 'Math.top(x,y)'],
        answer: 1
    }
];

var startBtn = document.querySelector('#start');
var questionTitle = document.querySelector('#question-title');
var multiChoices = document.querySelector('#choices');
var questionsDiv = document.querySelector('#questions');
var check = document.querySelector('#check');
var choices = "";
var quizTimer = document.querySelector('#time');
var finalScore = document.querySelector('#final-score');
// variable to store user answer
var answer = 0;
var question = "";
var timerCount;
var score = 0;
var quizFinished = false;
// function to show and hide divs on the page
function changeClass(id, currentClass, newClass) {
    document.querySelector(id).classList.remove(currentClass);
    document.querySelector(id).classList.add(newClass);
};

// start quiz
function startQuiz() {
    timerCount = 20;
    document.querySelector('#start-screen').classList.add('hide');
    changeClass('#questions', 'hide', 'visible');
    showQuestion(questionBank[0]);
    startTimer();

};
startBtn.addEventListener('click', startQuiz);


// function to show question and hide start
function showQuestion(question) {
    questionTitle.textContent = JSON.parse(JSON.stringify(question.title));
    choices = JSON.parse(JSON.stringify(question.choices));
    answer = JSON.stringify(question.answer);
    for (var i = 0; i < choices.length; i++) {
        const choice = document.createElement('button');
        choice.setAttribute('data-number', i + 1);
        choice.textContent = `${choice.dataset.number}. ${choices[i]}`;
        multiChoices.append(choice);
    };
};

function runQuiz(qBank) {

    multiChoices.addEventListener('click', function (event) {
        if (qBank.length === 0) {
            quizFinished = true;
        };
        question = qBank.pop();
        if (event.target.matches('button') === true) {
            var choiceClicked = event.target;
            var choiceNumber = choiceClicked.dataset.number;

            if (choiceNumber === answer) {
                score += 5;
            }
            else {
                timerCount -= 5;
                if (timerCount < 0) {
                    quizFinished = true;
                    finishQuiz();
                }
            };

        };
        questionTitle.textContent = "";
        multiChoices.textContent = "";
        if (!quizFinished) {
            showQuestion(question);
        }
        else {
            quizFinished = true;
            finishQuiz()
        }
    });
};

runQuiz(questionBank);

// The setTimer function starts and stops the timer and triggers winGame() and loseGame()
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

function finishQuiz() {
        changeClass('#questions', 'visible', 'hide');
        changeClass('#end-screen', 'hide', 'visible');
        finalScore.textContent = score;
};