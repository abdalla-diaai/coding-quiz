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
var qChosen = [];
var questionTitle = document.querySelector('#question-title');
var multiChoices = document.querySelector('#choices');
var questionsDiv = document.querySelector('#questions');
// variable to store user answer
var answer = 0;

// function to show and hide divs on the page
function changeClass(id, currentClass, newClass) {
    document.querySelector(id).classList.remove(currentClass);
    document.querySelector(id).classList.add(newClass);
};

// start quiz
startBtn.addEventListener('click', function () {
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
    if (!newDiv) {
        
    }
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
var qChosen = [];
function runQuiz(qBank) {
    
    multiChoices.addEventListener('click', function () {
        var question = qBank[Math.floor(Math.random() * qBank.length)];
        if (qChosen.includes(question.title)) {
            question = qBank[Math.floor(Math.random() * qBank.length)];
        }
        else {
            questionTitle.textContent = "";
            multiChoices.textContent = "";
            showQuestion(question);
        }
        if (qChosen.length === qBank.length) {
            changeClass('#questions', 'visible', 'hide');
            changeClass('#end-screen', 'hide', 'visible');
            return;
        }
        qChosen.push(question.title);
    });
};

runQuiz(questionBank);


