// var timer = 0;
function setTimer() {
var timerInterval = setInterval(function() {
    secondsLeft--;
    timer.textContent = secondsLeft;
    if (secondsLeft === 0) {
        clearInterval(timerInterval);
        sendMessage();
    }
}, 1000 * 6);
}
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
        btn.setAttribute("class", "choice-button btnEvent");
        document.getElementById('button').appendChild(btn);
    };
    questionEl.innerHTML = currentQuestion.question;
    var allButtons = document.querySelectorAll(".choice-button");
    var setTimer = 
};

function checkAnswer(event) {
    if (event.target.matches("button")) {

   
    if (questions[qIndex].correctAnswer === event.target.textContent ) {
        console.log("correct");
      //  answerIsCorrect();
    } else {
        console.log("wrong");
      //  timer--;
        //answerIsWrong();
    }; 
}
    //if statment to check answer
    // event listener to select answer 
    // create else / if statemetn to check answers, if correct it moves forward if not it doesn't 
    // make sure qIndex has a (++) to move next question
};
    document.addEventListener('click', checkAnswer)

quiz();
