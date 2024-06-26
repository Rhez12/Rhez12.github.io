const question = [
    {
        question: "Choose the correct answer",
        image: "Assets/1A12pture.PNG",
        answers: [
            {text: "A", correct: true},
            {text: "B", correct: false},
            {text: "C", correct: false},
            {text: "D", correct: false}
        ]
    },
    {
        question: "Choose the correct answer",
        image: "Asset/aaptDure.PNG",
        answers: [
            {text: "A", correct: false},
            {text: "B", correct: false},
            {text: "C", correct: false},
            {text: "D", correct: true}
        ]
    },
    {
        question: "Choose the correct answer",
        image: "Asset/Apture.PNG",
        answers: [
            {text: "A", correct: true},
            {text: "B", correct: false},
            {text: "C", correct: false},
            {text: "D", correct: false}
        ]
    },
    {
        question: "Choose the correct answer",
        image: "Asset/Bapture.PNG",
        answers: [
            {text: "A", correct: false},
            {text: "B", correct: true},
            {text: "C", correct: false},
            {text: "D", correct: false}
        ]
    },
    {
        question: "Choose the correct answer",
        image: "Asset/C8apture.PNG",
        answers: [
            {text: "A", correct: false},
            {text: "B", correct: false},
            {text: "C", correct: true},
            {text: "D", correct: false}
        ]
    },
    {
        question: "Choose the correct answer",
        image: "Asset/Btu.PNG",
        answers: [
            {text: "A", correct: false},
            {text: "B", correct: true},
            {text: "C", correct: false},
            {text: "D", correct: false}
        ]
    },
    {
        question: "Choose the correct answer",
        image: "Asset/C1apture.PNG",
        answers: [
            {text: "A", correct: false},
            {text: "B", correct: false},
            {text: "C", correct: true},
            {text: "D", correct: false}
        ]
    },
    {
        question: "Choose the correct answer",
        image: "Asset/C4apture.PNG",
        answers: [
            {text: "A", correct: false},
            {text: "B", correct: false},
            {text: "C", correct: true},
            {text: "D", correct: false}
        ]
    },
    {
        question: "Choose the correct answer",
        image: "Asset/C6apture.PNG",
        answers: [
            {text: "A", correct: false},
            {text: "B", correct: false},
            {text: "C", correct: true},
            {text: "D", correct: false}
        ]
    },
    {
        question: "Choose the correct answer",
        image: "Asset/Screenshot 2A024-01-17 003757.png",
        answers: [
            {text: "A", correct: true},
            {text: "B", correct: false},
            {text: "C", correct: false},
            {text: "D", correct: false}
        ]
    },
    {
        question: "Choose the correct answer",
        image: "Asset/dapture.PNG",
        answers: [
            {text: "A", correct: false},
            {text: "B", correct: false},
            {text: "C", correct: false},
            {text: "D", correct: true}
        ]
    },
    {
        question: "Choose the correct answer",
        image: "Asset/CP.PNG",
        answers: [
            {text: "A", correct: false},
            {text: "B", correct: false},
            {text: "C", correct: true},
            {text: "D", correct: false}
        ]
    },
    {
        question: "Choose the correct answer",
        image: "Asset/Cfil2.PNG",
        answers: [
            {text: "A", correct: false},
            {text: "B", correct: false},
            {text: "C", correct: true},
            {text: "D", correct: false}
        ]
    },
    {
        question: "Choose the correct answer",
        image: "Asset/CaptureA.PNG",
        answers: [
            {text: "A", correct: true},
            {text: "B", correct: false},
            {text: "C", correct: false},
            {text: "D", correct: false}
        ]
    },
    {
        question: "Choose the correct answer",
        image: "Asset/CApture.PNG",
        answers: [
            {text: "A", correct: true},
            {text: "B", correct: false},
            {text: "C", correct: false},
            {text: "D", correct: false}
        ]
    },
    {
        question: "Choose the correct answer",
        image: "Asset/CaptBure.PNG",
        answers: [
            {text: "A", correct: false},
            {text: "B", correct: true},
            {text: "C", correct: false},
            {text: "D", correct: false}
        ]
    },
    {
        question: "Choose the correct answer",
        image: "Asset/Cap80ture.PNG",
        answers: [
            {text: "A", correct: false},
            {text: "B", correct: false},
            {text: "C", correct: true},
            {text: "D", correct: false}
        ]
    },
    {
        question: "Choose the correct answer",
        image: "Asset/cAnjipture.PNG",
        answers: [
            {text: "A", correct: true},
            {text: "B", correct: false},
            {text: "C", correct: false},
            {text: "D", correct: false}
        ]
    },
    {
        question: "Choose the correct answer",
        image: "Asset/CA2pture.PNG",
        answers: [
            {text: "A", correct: true},
            {text: "B", correct: false},
            {text: "C", correct: false},
            {text: "D", correct: false}
        ]
    },
    {
        question: "Choose the correct answer",
        image: "Asset/C90apture.PNG",
        answers: [
            {text: "A", correct: false},
            {text: "B", correct: false},
            {text: "C", correct: true},
            {text: "D", correct: false}
        ]
    },
    

];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const questionImage = document.getElementById("question-image");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestions();
}

function showQuestions() {
  resetState();
  let currentQuestion = question[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
  if (currentQuestion.image) {
    questionImage.src = currentQuestion.image;
    questionImage.style.display = "block";
  } else {
    questionImage.style.display = "none";
  }

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
  questionImage.style.display = "none";
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function ShowScore() {
    resetState();
    questionElement.innerHTML = `You Scored ${score} out of ${question.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < question.length) {
        showQuestions();
    } else {
        ShowScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < question.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

startQuiz();