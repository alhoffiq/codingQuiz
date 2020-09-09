let questionNumber = $("#questionNumber");
let timeLeftEl = $("#timeLeft");
let question = $("#question");
let answerBtn1 = $(".answer1");
let answerBtn2 = $(".answer2");
let answerBtn3 = $(".answer3");
let answerBtn4 = $(".answer4");
let timeLeft = 5;

let timer = setInterval(function() {
    timeLeft--
    timeLeftEl.text("Time left: " + timeLeft);
    if (timeLeft === 0) {
        clearInterval(timer);
        endQuiz();
    }
},1000)

function endQuiz() {
    let initials = prompt("You earned a score of " + timeLeft + "!\nPlease enter your initials for the leaderboards");
}