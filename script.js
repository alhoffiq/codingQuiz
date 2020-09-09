let questionNumber = $("#questionNumber");
let timeLeftEl = $("#timeLeft");
let question = $("#question");
let answerEl1 = $(".answer1");
let answerEl2 = $(".answer2");
let answerEl3 = $(".answer3");
let answerEl4 = $(".answer4");
let answerBtn1 = $(".answerBtn1");
let answerBtn2 = $(".answerBtn2");
let answerBtn3 = $(".answerBtn3");
let answerBtn4 = $(".answerBtn4");
let timeLeft = 60;

let questions = [ // Array of questions, question 1 is hard loaded from the html already
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

let timer = setInterval(function() { // Timer function
    timeLeft--
    timeLeftEl.text("Time left: " + timeLeft);
    if (timeLeft <= 0) {
        clearInterval(timer);
        endQuiz();
    }
},1000)

let currentQuestion = 0;
answerBtn1.on("click", function() {
    if (document.querySelector(".answer1").getAttribute("data-correct") === "y") { // Check if this button corresponds to the correct answer
        alert("You are correct!");
        currentQuestion++;
        nextQuestion(currentQuestion);
    }
    else {
        alert("Sorry, not quite. You lose 5 seconds :(");
        timeLeft = timeLeft - 5;
        currentQuestion++;
        nextQuestion(currentQuestion);
    }
})
answerBtn2.on("click", function() {
    if (document.querySelector(".answer1").getAttribute("data-correct") === "y") { // Check if this button corresponds to the correct answer
        alert("You are correct!");
        currentQuestion++;
        nextQuestion(currentQuestion);
    }
    else {
        alert("Sorry, not quite. You lose 5 seconds :(");
        timeLeft = timeLeft - 5;
        currentQuestion++;
        nextQuestion(currentQuestion);
    }
})
answerBtn3.on("click", function() {
    if (document.querySelector(".answer1").getAttribute("data-correct") === "y") { // Check if this button corresponds to the correct answer
        alert("You are correct!");
        currentQuestion++;
        nextQuestion(currentQuestion);
    }
    else {
        alert("Sorry, not quite. You lose 5 seconds :(");
        timeLeft = timeLeft - 5;
        currentQuestion++;
        nextQuestion(currentQuestion);
    }
})
answerBtn4.on("click", function() {
    if (document.querySelector(".answer1").getAttribute("data-correct") === "y") { // Check if this button corresponds to the correct answer
        alert("You are correct!");
        currentQuestion++;
        nextQuestion(currentQuestion);
    }
    else {
        alert("Sorry, not quite. You lose 5 seconds :(");
        timeLeft = timeLeft - 5;
        currentQuestion++;
        nextQuestion(currentQuestion);
    }
})


function nextQuestion(i) { // Displays the question object's properties using the html elements
    questionNumber.text(questions[i].number);
    question.text(questions[i].question);
    answerEl1.text(questions[i].answer1);
    answerEl2.text(questions[i].answer2);
    answerEl3.text(questions[i].answer3);
    answerEl4.text(questions[i].answer4);
}

function endQuiz() {
    let initials = prompt("You earned a score of " + timeLeft + "!\nPlease enter your initials for the leaderboards");
}