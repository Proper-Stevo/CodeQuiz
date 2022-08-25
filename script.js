var secondsLeft = 60;
var qIndex = 0;
// the qindex was a way to call everything in the array 

// making the timer function here to start as soon as the website begins
function setTimer() {
    var countDown = document.getElementById("count");
    // calling the id i used in the html by using "count" here
    var timerInterval = setInterval(function() {
        secondsLeft--;
        countDown.textContent = secondsLeft;
        if (secondsLeft === 0) {
            clearInterval(timerInterval);
        }
    }, 1000);
}

// these are the questions and answers and correct answers as arrays 
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
},
{
    question: "Arrays in JavaScript can be used to store:",
    choices: ["arrays", "other strings", "booleans", "all the above"],
    answer: "all the above",
}];
// the complete quiz is working here, this was super interesting  to call because i learned so much on here
// multiple functions are being called here 
function quiz() {
    nextQuestion();
    setTimer();
}

function nextQuestion() {
    // the questions are being called by using an array and then a index of the array above in line 18
    var currentQuestion = questions[qIndex];
    var questionEl = document.getElementById("prompt");
    for (let i = 0; i < 4; i++) {
        // this was great to use because the 'for' statment was to make sure the possible answers are being called here
    var btn = document.createElement('button');
        btn.innerHTML = currentQuestion.answers[i];
        btn.setAttribute("class", "choice-button btnEvent");
        document.getElementById('button').appendChild(btn);

    };
    questionEl.innerHTML = currentQuestion.question;
    var allButtons = document.querySelectorAll(".choice-button");
};
// this function was great because it helped me clear the text that was being used on previous buttons on the function above
    function clearContent() {
        document.getElementById('button').innerHTML = '';
    }


function checkAnswer(event) {
    if (event.target.matches("button")) {

   // using the qindex = qindex was amazing because it made the next question come out and it was super helpful
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

