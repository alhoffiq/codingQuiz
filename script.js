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
let answerBtn4 = $(".answerBtn4"); // Variables for just about every html element that's going to change just so it looks at least somewhat neater down there
let timeLeft = 60;

let questions = [ // Array of questions, question 1 is hard loaded from the html already so this first one is only here for reference and complete-ness
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
];

displayScores();

let timer = setInterval(function () { // Timer function
    timeLeft--
    timeLeftEl.text("Time left: " + timeLeft);
    if (timeLeft <= 0 && window.location.pathname === quiz.html) { // I did what everyone said not to do and linked 1 js file to 2 html files and I had to find this weird fix because if you sat on the start page for 60 seconds you would fail a quiz that hadn't even shown up yet lol.
        clearInterval(timer);
        endQuiz();
    }
}, 1000)

let currentQuestion = 0;

answerBtn1.on("click", function () {
    if (document.querySelector(".answer1").getAttribute("data-correct") === "y") { // Check if this button corresponds to the correct answer
        correctClick();
    }
    else {
        wrongClick();
    }
    answerChanger(currentQuestion); // Change the data tag defining which button is the correct answer
    doneYet(); 
})

answerBtn2.on("click", function () {
    if (document.querySelector(".answer2").getAttribute("data-correct") === "y") {
        correctClick();
    }
    else {
        wrongClick();
    }
    answerChanger(currentQuestion);
    doneYet(); 
})

answerBtn3.on("click", function () {
    if (document.querySelector(".answer3").getAttribute("data-correct") === "y") { 
        correctClick();
    }
    else {
        wrongClick();
    }
    answerChanger(currentQuestion);
    doneYet(); 
})

answerBtn4.on("click", function () {
    if (document.querySelector(".answer4").getAttribute("data-correct") === "y") { 
        correctClick();
    }
    else {
        wrongClick();
    }
    answerChanger(currentQuestion);
    doneYet(); 
})


function nextQuestion(i) { // Displays the question object's properties using the html elements
    if (i < questions.length) {
    questionNumber.text(questions[i].number);
    question.text(questions[i].question);
    answerEl1.text(questions[i].answer1);
    answerEl2.text(questions[i].answer2);
    answerEl3.text(questions[i].answer3);
    answerEl4.text(questions[i].answer4);
    }

}

function endQuiz() {
    let last3 = window.localStorage.getItem("last3");
    let initials = prompt("You earned a score of " + timeLeft + "!\nPlease enter your initials for the leaderboards");
    if (last3 === "1") { // Stores the last 3 quiz scores
        window.localStorage.setItem("initials1", initials);
        window.localStorage.setItem("score1", timeLeft);
        window.localStorage.setItem("last3", 2);        
    }
    else if (last3 === "2") {
        window.localStorage.setItem("initials2", initials);
        window.localStorage.setItem("score2", timeLeft);
        window.localStorage.setItem("last3", 3);        
    }
    else if (last3 === "3") {
        window.localStorage.setItem("initials3", initials);
        window.localStorage.setItem("score3", timeLeft);
        window.localStorage.setItem("last3", 1);        
    }

    window.location.href = "index.html";
}

function doneYet() {
    if (currentQuestion >= questions.length) { // User completed quiz before time was up
        endQuiz();
    }
}

function answerChanger(currentQ) { // What a probably very sloppy way of changing the data attribute that's defining the correct answer button after each question but hey it works...basically my moto for an excuse at this point with all this spaghetti.
    if (currentQ === 1) {
        document.querySelector(".answer2").setAttribute("data-correct", "n");
        document.querySelector(".answer1").setAttribute("data-correct", "y");
    } // Not dynamic at all either, just hard coding in each attribute that needs to change
    else if (currentQ === 2) {
        document.querySelector(".answer1").setAttribute("data-correct", "n");
        document.querySelector(".answer3").setAttribute("data-correct", "y");
    }
}

function correctClick() {
    alert("You are correct!");
    currentQuestion++;
    nextQuestion(currentQuestion);
}

function wrongClick() {
    alert("Sorry, not quite. You lose 5 seconds :(");
    timeLeft = timeLeft - 5;
    currentQuestion++;
    nextQuestion(currentQuestion); 
}

function displayScores() {
    if (window.localStorage.getItem("score1") === null) { // Initialize local storage
        window.localStorage.setItem("initials1", "abc");
        window.localStorage.setItem("initials2", "def");
        window.localStorage.setItem("initials3", "ghi");
        window.localStorage.setItem("score1", "60");
        window.localStorage.setItem("score2", "55");
        window.localStorage.setItem("score3", "50");
        window.localStorage.setItem("last3", "1");
    }
    $("#score1").text(window.localStorage.getItem("initials1") + " " + "|" + " " + window.localStorage.getItem("score1"));
    $("#score2").text(window.localStorage.getItem("initials2") + " " + "|" + " " + window.localStorage.getItem("score2"));
    $("#score3").text(window.localStorage.getItem("initials3") + " " + "|" + " " + window.localStorage.getItem("score3"));
}