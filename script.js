
const pushButton = document.getElementById("button")

pushButton.addEventListener('click', checkAnswer)

function selectAnswer() {
};
var qIndex = 0;

const questions = [{
    question: "Common used data types DO Not Include?",
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
    nextQuestion();
}

function nextQuestion() {
    var currentQuestion = questions[qIndex];
    var questionEl = document.getElementById("prompt");
    for (let i = 0; i < 4; i++) {
        var btn = document.createElement('button');
        btn.innerHTML = currentQuestion.answers[i];
        document.getElementById('button').appendChild(btn);
    };
    questionEl.innerHTML = currentQuestion.question;
};

function checkAnswer(event) {
    console.log(event.target);
    if (questions[qIndex].correctAnswer == answer) {
        score++;
        answerIsCorrect();
    } else {
        answerIsWrong();
    }; if 
    //if statment to check answer
    // event listener to select answer 
    // create else / if statemetn to check answers, if correct it moves forward if not it doesn't 
    // make sure qIndex has a (++) to move next question
};


quiz();
