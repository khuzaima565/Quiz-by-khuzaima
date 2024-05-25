// JavaScript (script.js):
const questions = [
    {
        question: "What is the capital of France?",
        answers: [
            { text: "Paris", correct: true },
            { text: "Berlin", correct: false },
            { text: "London", correct: false },
            { text: "Madrid", correct: false }
        ]
    },
    {
        question: "What is 2 + 2?",
        answers: [
            { text: "4", correct: true },
            { text: "3", correct: false },
            { text: "5", correct: false },
            { text: "6", correct: false }
        ]
    },
    {
        question: "What is the capital of Japan?",
        answers: [
            { text: "Beijing", correct: false },
            { text: "Tokyo", correct: true },
            { text: "Seoul", correct: false },
            { text: "Bangkok", correct: false }
        ]
    },
    {
        question: "What is the largest planet in our solar system?",
        answers: [
            { text: "Jupiter", correct: true },
            { text: "Saturn", correct: false },
            { text: "Earth", correct: false },
            { text: "Mars", correct: false }
        ]
    },
    {
        question: "Who is known as the father of modern physics?",
        answers: [
            { text: "Isaac Newton", correct: false },
            { text: "Albert Einstein", correct: true },
            { text: "Galileo Galilei", correct: false },
            { text: "Nikola Tesla", correct: false }
        ]
    },
    {
        question: "What is the chemical symbol for gold?",
        answers: [
            { text: "Au", correct: true },
            { text: "Ag", correct: false },
            { text: "Fe", correct: false },
            { text: "Cu", correct: false }
        ]
    },
    {
        question: "Who wrote 'To Kill a Mockingbird'?",
        answers: [
            { text: "Harper Lee", correct: true },
            { text: "Mark Twain", correct: false },
            { text: "Ernest Hemingway", correct: false },
            { text: "J.K. Rowling", correct: false }
        ]
    },
    {
        question: "Which gas is most abundant in Earth's atmosphere?",
        answers: [
            { text: "Nitrogen", correct: true },
            { text: "Oxygen", correct: false },
            { text: "Carbon dioxide", correct: false },
            { text: "Argon", correct: false }
        ]
    },
    {
        question: "Who discovered penicillin?",
        answers: [
            { text: "Alexander Fleming", correct: true },
            { text: "Louis Pasteur", correct: false },
            { text: "Marie Curie", correct: false },
            { text: "Jonas Salk", correct: false }
        ]
    },
    {
        question: "What is the largest organ in the human body?",
        answers: [
            { text: "Liver", correct: false },
            { text: "Heart", correct: false },
            { text: "Skin", correct: true },
            { text: "Brain", correct: false }
        ]
    },
    // Add 10 more questions below
    {
        question: "What is the capital of Italy?",
        answers: [
            { text: "Rome", correct: true },
            { text: "Paris", correct: false },
            { text: "Berlin", correct: false },
            { text: "London", correct: false }
        ]
    },
    {
        question: "What is the chemical symbol for water?",
        answers: [
            { text: "H2O", correct: true },
            { text: "CO2", correct: false },
            { text: "O2", correct: false },
            { text: "NaCl", correct: false }
        ]
    },
    {
        question: "Who is the author of '1984'?",
        answers: [
            { text: "George Orwell", correct: true },
            { text: "J.K. Rowling", correct: false },
            { text: "Ernest Hemingway", correct: false },
            { text: "Charles Dickens", correct: false }
        ]
    },
    {
        question: "What is the chemical symbol for sodium?",
        answers: [
            { text: "Na", correct: true },
            { text: "Ne", correct: false },
            { text: "Ni", correct: false },
            { text: "Au", correct: false }
        ]
    },
    {
        question: "Which planet is known as the 'Red Planet'?",
        answers: [
            { text: "Mars", correct: true },
            { text: "Venus", correct: false },
            { text: "Jupiter", correct: false },
            { text: "Mercury", correct: false }
        ]
    },
    {
        question: "Who painted the Mona Lisa?",
        answers: [
            { text: "Leonardo da Vinci", correct: true },
            { text: "Pablo Picasso", correct: false },
            { text: "Vincent van Gogh", correct: false },
            { text: "Michelangelo", correct: false }
        ]
    },
    {
        question: "What is the chemical symbol for iron?",
        answers: [
            { text: "Fe", correct: true },
            { text: "Ir", correct: false },
            { text: "Au", correct: false },
            { text: "Ag", correct: false }
        ]
    },
    {
        question: "Who wrote 'Pride and Prejudice'?",
        answers: [
            { text: "Jane Austen", correct: true },
            { text: "Emily Bronte", correct: false },
            { text: "Charlotte Bronte", correct: false },
            { text: "William Shakespeare", correct: false }
        ]
    },
    {
        question: "What is the chemical symbol for carbon?",
        answers: [
            { text: "C", correct: true },
            { text: "Ca", correct: false },
            { text: "Co", correct: false },
            { text: "Cu", correct: false }
        ]
    },
    {
        question: "Who developed the theory of relativity?",
        answers: [
            { text: "Albert Einstein", correct: true },
            { text: "Isaac Newton", correct: false },
            { text: "Galileo Galilei", correct: false },
            { text: "Stephen Hawking", correct: false }
        ]
    }
];

const questionContainer = document.getElementById('question-text');
const answerContainer = document.getElementById('answers');
const resultContainer = document.getElementById('result-container');
const reviewContainer = document.getElementById('review-container');

let currentQuestionIndex = 0;
let score = 0;
let userAnswers = [];

// Display current question and answers
function displayQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionContainer.textContent = currentQuestion.question;
    answerContainer.innerHTML = '';
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.textContent = answer.text;
        button.classList.add('answer-btn');
        button.dataset.correct = answer.correct;
        button.addEventListener('click', () => selectAnswer(answer));
        answerContainer.appendChild(button);
    });
}

// Select answer and check correctness
function selectAnswer(selectedAnswer) {
    const correctAnswer = selectedAnswer.correct;
    const answerText = selectedAnswer.text;
    userAnswers.push({ question: questions[currentQuestionIndex].question, answer: answerText, correct: correctAnswer });
    if (correctAnswer) {
        score++;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        showResult();
    }
}

// Display quiz result
function showResult() {
    resultContainer.innerHTML = `
        <h2>Your Score: ${score} out of ${questions.length}</h2>
        <p>${score >= questions.length / 2 ? 'Congratulations! You passed the quiz.' : 'Sorry! You failed the quiz.'}</p>
        <button id="review-btn" class="answer-btn">Review Answers</button>
    `;
    resultContainer.style.display = 'block';
    reviewContainer.style.display = 'none';
    document.getElementById('review-btn').addEventListener('click', showReview);
}

// Show review of answers
function showReview() {
    reviewContainer.innerHTML = '<h2>Review Answers</h2>';
    userAnswers.forEach((answer, index) => {
        const answerResult = answer.correct ? 'Correct' : 'Incorrect';
        const answerClass = answer.correct ? 'correct-answer' : 'incorrect-answer';
        reviewContainer.innerHTML += `<div class="review-item"><p><strong>Question ${index + 1}:</strong> ${answer.question}</p><p><strong>Your Answer:</strong> ${answer.answer}</p><p><strong>Result:</strong> <span class="${answerClass}">${answerResult}</span></p></div>`;
    });
    reviewContainer.style.display = 'block';
}

// Start the quiz
displayQuestion();
// Hide result container initially
resultContainer.style.display = 'none';
