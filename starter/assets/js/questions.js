var questionsBank = {
    question1: {
        title: 'Which of the following is not a valid JavaScript loop statement?',
        choices: ['for', 'while', 'do…while', 'until'],
        answer: 4
    },
    question2: {
        title: 'What is the purpose of the splice() method in JavaScript?',
        choices: ['To add elements to an array', 'To remove elements from an array', 'To replace elements in an array', 'All of the above'],
        answer: 4
    },
    question3: {
        title: 'What is the result of the following code? var x = 5; x++;',
        choices: ['x is now 4', 'x is now 5', 'x is now 6', 'None of the above'],
        answer: 4
    }
};

// variable to store user answer
var answer = 0

// function to show question and hide start
function showQuestion() {
    document.querySelector('#start-screen').classList.add('hide');
    changeClass('#questions', 'hide', 'visible');
    var question = questionsBank.question1;
    console.log(JSON.stringify(question.title));
    const qTitle = document.createElement('div');
    qTitle.innerHTML = JSON.stringify(question.title);
    document.querySelector('#question-title').append(qTitle);

    const choices = JSON.parse(JSON.stringify(question.choices));
    answer = JSON.stringify(question.answer);
    const choicesList = document.createElement('ul');
    for (var i = 0; i < choices.length; i++){
        const choice = document.createElement('ol');
        choice.setAttribute('data-number', i+1);
        choice.innerHTML = `${choice.dataset.number}. ${choices[i]}`;
        choicesList.append(choice);
    };
    document.querySelector('#choices').append(choicesList);
};

document.querySelector('#start').addEventListener('click', showQuestion);

// function to check answer
function checkAnswer(event) {
    var choiceClicked = event.target;
    var choiceNumber = choiceClicked.dataset.number;
    console.log(choiceNumber);
    const choiceAnswer = document.createElement('span');
    if (answer == choiceNumber){
        choiceAnswer.innerHTML = 'Correct';
    }
    else {
        choiceAnswer.innerHTML = 'Wrong';
    }
    document.querySelector('#questions').append(choiceAnswer);
};
document.querySelector('#choices').addEventListener('click', checkAnswer);