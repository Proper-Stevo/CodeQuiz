var secondsLeft = 60;
var qIndex = 0;


function setTimer() {
    var countDown = document.getElementById("count");
    var timerInterval = setInterval(function() {
        secondsLeft--;
        countDown.textContent = secondsLeft;
        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            sendMessage();
        }
    }, 1000);
}


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
    setTimer();
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
};

    


function checkAnswer(event) {
    if (event.target.matches("button")) {

   
    if (questions[qIndex].correctAnswer === event.target.textContent ) {
        console.log("correct");
        qIndex = qIndex + 1;
        nextQuestion();
      //  answerIsCorrect();
    } else {
        console.log("wrong");
        secondsLeft = secondsLeft -5;
        //answerIsWrong();
    }; 
}
};
    document.addEventListener('click', checkAnswer)

quiz();


//remove buttons after each question OR change text contecnt of buttons