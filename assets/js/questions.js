// object to hold questions and answers
var questionsBank = [
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

// variables to get page items
var startBtn = document.querySelector('#start');
var questionTitle = document.querySelector('#question-title');
var multiChoices = document.querySelector('#choices');
var answerCheck = document.querySelector('#check');
var finalScore = document.querySelector('#final-score');

// variables for functions
var choices = "";
var question = "";
var answer = 0;
var score = 0;
var quizFinished = false;
var timerCount;
var userAnswer = "";

// audio sounds
let correct = new Audio('assets/sfx/correct.wav')
let incorrect = new Audio('assets/sfx/incorrect.wav')

// variables to get high score items
var finalSubmit = document.querySelector('#submit');
var userInitials = document.querySelector('#initials');

// start quiz, hide start screen div, show questions div, choose first question
function startQuiz() {
    // adjust quiz timer as needed
    timerCount = 60;
    document.querySelector('#start-screen').classList.add('hide');
    changeClass('#questions', 'hide', 'visible');
    showQuestion(questionsBank.pop());
    startTimer();
};

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

// run quiz, choose question and remove it from questions bank
function changeQuestions(qBank) {
    multiChoices.addEventListener('click', function (event) {
        event.stopPropagation();
        if (timerCount === 0 || qBank.length === 0) {
            quizFinished = true;
            finishQuiz();
        }
        else {
            question = qBank.pop();
            questionTitle.textContent = "";
            multiChoices.textContent = "";
            showQuestion(question);
            var choiceClicked = event.target;
            if (choiceClicked.matches('button') === true) {
                var choiceNumber = choiceClicked.dataset.number;
                if (choiceNumber === answer) {
                    score += 10;
                    userAnswer = 'Correct';
                    // play correct sound
                    correct.play()
                }
                else {
                    userAnswer = "Incorrect";
                    // play incorrect sound
                    incorrect.play()
                    timerCount -= 10;
                    if (timerCount === 0) {
                        finishQuiz();
                    };
                };
                setTimeout(() => {
                    answerCheck.textContent = "";
                }, 1500);
                answerCheck.textContent = userAnswer;

            };

        };
    });
};

// start game when start button is clicked and show first question
startBtn.addEventListener('click', startQuiz);

// show next questions and check answers
changeQuestions(questionsBank);

// add final score to DOM
function finishQuiz() {
    changeClass('#questions', 'visible', 'hide');
    changeClass('#end-screen', 'hide', 'visible');
    quizTimer.classList.remove('fade-text');
    finalScore.textContent = score;
};