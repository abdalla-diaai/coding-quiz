var questionBank = [
    {
        title: 'Which of the following is not a valid JavaScript loop statement?',
        choices: ['for', 'while', 'do…while', 'until'],
        answer: 4
    },
    {
        title: 'What is the purpose of the splice() method in JavaScript?',
        choices: ['To add elements to an array', 'To remove elements from an array', 'To replace elements in an array', 'All of the above'],
        answer: 4
    },
    {
        title: 'What is the result of the following code? var x = 5; x++;',
        choices: ['x is now 4', 'x is now 5', 'x is now 6', 'None of the above'],
        answer: 4
    },
    {
        title: 'Which of the following is not a valid JavaScript loop statement?',
        choices: ['for', 'while', 'do…while', 'until'],
        answer: 4
    },
    {
        title: 'What is the purpose of the splice() method in JavaScript?',
        choices: ['To add elements to an array', 'To remove elements from an array', 'To replace elements in an array', 'All of the above'],
        answer: 4
    },
    {
        title: 'What is the result of the following code? var x = 5; x++;',
        choices: ['x is now 4', 'x is now 5', 'x is now 6', 'None of the above'],
        answer: 4
    }
];

var questionTitle = document.querySelector('#question-title');
var multiChoices = document.querySelector('#choices');
var questionsDiv = document.querySelector('#questions');

;
function changeClass(id, currentClass, newClass) {
    document.querySelector(id).classList.remove(currentClass);
    document.querySelector(id).classList.add(newClass);
};


// variable to store user answer
var answer = 0

document.querySelector('#start').addEventListener('click', function () {
    showQuestion(questionBank[0]);
});



// function to show question and hide start
function showQuestion(question) {
    document.querySelector('#start-screen').classList.add('hide');
    changeClass('#questions', 'hide', 'visible');
    var qTitle = document.createElement('div');
    questionTitle.append(qTitle);
    qTitle.textContent = JSON.stringify(question.title);

    var choices = JSON.parse(JSON.stringify(question.choices));
    answer = JSON.stringify(question.answer);
    const choicesList = document.createElement('ul');
    multiChoices.append(choicesList);
    for (var i = 0; i < choices.length; i++) {
        const choice = document.createElement('ol');
        choice.setAttribute('data-number', i + 1);
        choice.textContent = `${choice.dataset.number}. ${choices[i]}`;
        choicesList.append(choice);
    };
    var newDiv = document.createElement('div');
    newDiv.setAttribute("id", "correct");
    multiChoices.append(newDiv);
    multiChoices.addEventListener('click', function (event) {
            var choiceClicked = event.target;
            var choiceNumber = choiceClicked.dataset.number;
            var newDiv = document.querySelector('#correct');
            if (choiceNumber === answer) {
                newDiv.innerHTML = "correct";
            }
            else {
                newDiv.innerHTML = "incorrect";
            }
        });
};

function runQuiz(qBank) {
    multiChoices.addEventListener('click', function () {
        var question = qBank[Math.floor(Math.random() * qBank.length)];
        questionTitle.textContent = "";
        multiChoices.textContent = "";
        showQuestion(question);
    });
};





