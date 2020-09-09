let questionNumber = $("#questionNumber");
let timeLeftEl = $("#timeLeft");
let question = $("#question");
let answerBtn1 = $(".answer1");
let answerBtn2 = $(".answer2");
let answerBtn3 = $(".answer3");
let answerBtn4 = $(".answer4");
let timeLeft = 60;

setInterval(function() {
    timeLeft--
    timeLeftEl.text("Time left: " + timeLeft);
},1000)