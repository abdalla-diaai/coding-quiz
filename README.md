# coding-quiz

A simple coding quiz website where the user is presented with code related questions that need to be answered with in the time limit. 

## Description:

The website is run to show a consecutive series of multiple choice questions about JavaScript. The question bank [HERE](https://github.com/abdalla-diaai/coding-quiz/blob/7d47954fea00263d03415c01332526a23fcc1932/assets/js/questions.js#L2-L43?plain=1) contains 8 questions at the moment about JavaScript only. These questions can be changed as long as format is kept in this structure as an array [] containing an object {} which contains title, choices and answer as keys. The repository contains three JavaScript files, questions; contains questions logic, logic.js; contains functions to changeClass, startTimer, finishQuiz, storeScore functions and lastly, scores.js which contains handles high score page.  

## Installation

NA

## Usage

Simply press the start quiz button and choose an answer by clicking on it. There is a timer of 60 seconds which can be changed [HERE](https://github.com/abdalla-diaai/coding-quiz/blob/7d47954fea00263d03415c01332526a23fcc1932/assets/js/questions.js#L74?plain=1) as needed. The user will get 10 points for correct answer and penalised 10 seconds for incorrect answers. The quiz will finish if time reaches zero or the user answer all the questions. The user can include his name or name initials at the end of the quiz to eventually finish the quiz. [Link to DEPLOYED PAGE](https://abdalla-diaai.github.io/coding-quiz/index.html).

### Possible Issues

If the user clicks quickly, there may be the possibility that a feedback for user choice either correct or incorrect may be missed. There is a sound that plays specific sound for correct and incorrect answers but it also depends on how quick the user click to answer the questions. In a good case scenario, it is assumed that the user will take more than 2 seconds to read the questions and choose an answer.

## Credit

NA

## License

Please refer to the LICENSE in the repository.
