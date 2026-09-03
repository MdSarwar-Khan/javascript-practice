const startScreen = document.getElementById("strt-pg");
const quizScreen = document.getElementById("question-pg");
const resultScreen = document.getElementById("end-pg");

const nextques = document.getElementById("next-ques");
const startButton = document.getElementById("strt-btn");
const answerButton = document.querySelectorAll(".question-options button");
const restartButton = document.getElementById("restrt-btn");

const quesText = document.getElementById("question-text");
const currentQues = document.getElementById("question-no");
const currentScore = document.getElementById("score");
const totalQues = document.getElementById("total-ques");

const progressBAr = document.getElementById("progress");
const finalScore = document.getElementById("final-score");
const maxScore = document.getElementById("max-score");
const resultMsg = document.getElementById("final-text");

const questions = [
    {
        question: "What is the capital of India?",
        options: ["Delhi", "Mumbai", "Kolkata", "Chennai"],
        answer: "Delhi"
    },

    {
        question: "Which language is used to style a webpage?",
        options: ["HTML", "CSS", "Python", "C++"],
        answer: "CSS"
    },

    {
        question: "Which language is used to add interactivity to a webpage?",
        options: ["HTML", "CSS", "JavaScript", "SQL"],
        answer: "JavaScript"
    },

    {
        question: "What does HTML stand for?",
        options: [
            "Hyper Text Markup Language",
            "High Text Machine Language",
            "Hyper Tool Multi Language",
            "Home Text Markup Language"
        ],
        answer: "Hyper Text Markup Language"
    },

    {
        question: "Which keyword creates a variable in JavaScript?",
        options: ["var", "style", "html", "link"],
        answer: "var"
    }
];

let currentQuestionIndex = 0;
let score = 0;


restartButton.addEventListener("click", ()=>{
    resultScreen.classList.remove("active");
    startScreen.classList.add("active");
});

startButton.addEventListener("click", ()=>{
    startScreen.classList.remove("active");
    currentQuestionIndex = 0;
    score = 0;
    answerButton.forEach((button) => {
        button.disabled = false;
        button.classList.remove("correct", "incorrect");
    });
    quizScreen.classList.add("active");
    showQues();
});

function showQues() {
    const currentQuestion = questions[currentQuestionIndex];
    quesText.innerText = currentQuestion.question;
    currentQues.innerText = currentQuestionIndex + 1;
    totalQues.innerText = questions.length;

    answerButton.forEach((button, index) => {
        button.innerText = currentQuestion.options[index];
    });

    const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
    progressBAr.style.width = progress + "%";
};

nextques.addEventListener("click", () => {
   if(currentQuestionIndex < questions.length - 1) {
    currentQuestionIndex++;
    showQues();

    answerButton.forEach((btnn) => {
        btnn.classList.remove("correct", "incorrect");
        btnn.disabled = false;
    });

   }
   else {
    quizScreen.classList.remove("active");
    resultScreen.classList.add("active");

    maxScore.innerText = questions.length;
    finalScore.innerText = score;

    if (score === 0) {
    resultMsg.innerText =
        "💀 0/5?! Even Google couldn't save you from that performance.";
    }
    else if (score === 1) {
    resultMsg.innerText =
        "😭 1/5... You didn't take the quiz, the quiz took you.";
    }
    else if (score === 2) {
    resultMsg.innerText =
        "😂 2/5! You're not wrong often... just most of the time.";
    }
    else if (score === 3) {
    resultMsg.innerText =
        "😏 3/5! Not bad. Your brain has officially entered the chat.";
    }
    else if (score === 4) {
    resultMsg.innerText =
        "🔥 4/5! So close! That one wrong answer is going to haunt you.";
    }
    else {
    resultMsg.innerText =
        "🧠 5/5! Absolute genius. Somebody stop this person before they become too powerful! 🏆";
    }
   };

});

answerButton.forEach((button) => {
    button.addEventListener("click", () => {
        const selectedAns = button.innerText;
        const rightAns = questions[currentQuestionIndex].answer;

        answerButton.forEach((btn) => {
        btn.disabled = true;
    });

    if(selectedAns === rightAns){
        button.classList.add("correct");
        score++;
        currentScore.innerText = score;
    }
    else {
        button.classList.add("incorrect");
    }
    });
});






