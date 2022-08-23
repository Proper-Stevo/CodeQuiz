
const pushButton = document.getElementById("button")

pushButton.addEventListener('click', selectAnswer)

function selectAnswer() {
};
var qIndex = 0;

const questions = [{
    question: "Common used data types DO Not Include",
    answers: ["string", "booleans", "alerts", "numbers"],
    correctAnswer: "booleans"
},
{
    question: "The condistion else/if statement is closed with:",
    answers: ["quotes", "paranthesis", "curly brackets", "commas"],
    correctAnswer: "curly brackets"
},
{
    question: "Which JavaScript label catches all the values, except for the ones speficied?",
    answers: ["catch", "label", "try", "default"],
    correctAnswer: "default"
}];

function quiz() {
    const output = [];
    var currentQuestion = questions[qIndex];
    var questionEl = document.getElementById("prompt");
    questionEl.innerHTML = currentQuestion.question;
    questions.answers.forEach (
        
    )
}
quiz();

// change the buttons, use line 27 - 30 for exampple
// add 'click' event  for the button to work
// use a if/else statment that only allows correct answer
// when 'click' happens it will go to the next button 
// add event listener to each button 
// create a function for time