let questionNumber = $("#questionNumber");
let timeLeftEl = $("#timeLeft");
let question = $("#question");
let answerBtn1 = $(".answer1");
let answerBtn2 = $(".answer2");
let answerBtn3 = $(".answer3");
let answerBtn4 = $(".answer4");
let timeLeft = 5;

let questions = [
    question1 = {
        number: "Question #1",
        question: "Javascript is known as what part of the web?",
        answer1: "Bones",
        answer2: "Muscles",
        answer3: "Meat",
        answer4: "Skin",
    },
    question2 = {
        number: "Question #2",
        question: "What type of bracket is used to define an array?",
        answer1: "[Square]",
        answer2: "{Curly}",
        answer3: "(Parentheses)",
        answer4: "<Angled>",
    },
    question3 = {
        number: "Question #3",
        question: "What variable type prevents reasignment?",
        answer1: "var",
        answer2: "for",
        answer3: "const",
        answer4: "let",
    },
    question4 = {
        number: "Question #4",
        question: "What type of bracket is used to define an object?",
        answer1: "<Angled>",
        answer2: "[Square]",
        answer3: "{Curly}",
        answer4: "(Parentheses)",
    }
]

let timer = setInterval(function() {
    timeLeft--
    timeLeftEl.text("Time left: " + timeLeft);
    if (timeLeft === 0) {
        clearInterval(timer);
        endQuiz();
    }
},1000)

for (let i = 0; i < questions.length; i++) {
    nextQuestion(i);    
}

function nextQuestion(i) {
    questionNumber.text(questions[i].number);
    question.text(questions[i].question);
    answerBtn1.text(questions[i].answer1);
    answerBtn2.text(questions[i].answer2);
    answerBtn3.text(questions[i].answer3);
    answerBtn4.text(questions[i].answer4);
}











function endQuiz() {
    let initials = prompt("You earned a score of " + timeLeft + "!\nPlease enter your initials for the leaderboards");
}