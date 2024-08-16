document.addEventListener('DOMContentLoaded', function () {
    const questionElement = document.querySelector('.question');
    const optionButtons = document.querySelectorAll('.option');
    const nextButton = document.getElementById('nextBtn');
    const startButton = document.getElementById('startBtn');
    const scoreElement = document.getElementById('score');
    const quizContainer = document.querySelector('.quiz-container');
    const resultsContainer = document.querySelector('.results-container');
    let currentQuestionIndex = 0;
    let score = 0;

    const questions = [
        {
            question: 'What is the capital of France?',
            options: ['Paris', 'London', 'Berlin', 'Madrid'],
            answer: 'Paris'
        },
        {
            question: 'Which planet is known as the Red Planet?',
            options: ['Earth', 'Mars', 'Jupiter', 'Saturn'],
            answer: 'Mars'
        },
        {
            question: "Who wrote 'To Kill a Mockingbird'?",
            options: ["Harper Lee", "Mark Twain", "J.K. Rowling", "Jane Austen"],
            answer: "Harper Lee"
        },
        {
            question: "What is the smallest prime number?",
            options: ["1", "2", "3", "5"],
            answer: "2"
        },
        {
            question: "Which planet is known as the Red Planet?",
            options: ["Mars", "Venus", "Jupiter", "Saturn"],
            answer: "Mars"
        },
        {
            question: "What is the powerhouse of the cell?",
            options: ["Nucleus", "Mitochondria", "Ribosome", "Endoplasmic Reticulum"],
            answer: "Mitochondria"
        },
        {
            question: "Who painted the Mona Lisa?",
            options: ["Leonardo da Vinci", "Vincent van Gogh", "Pablo Picasso", "Claude Monet"],
            answer: "Leonardo da Vinci"
        },
        {
            question: "In which year did World War II end?",
            options: ["1941", "1945", "1939", "1948"],
            answer: "1945"
        },
        {
            question: "What is the chemical symbol for water?",
            options: ["O2", "H2O", "CO2", "NaCl"],
            answer: "H2O"
        },
        {
            question: "Which element has the atomic number 1?",
            options: ["Helium", "Oxygen", "Hydrogen", "Carbon"],
            answer: "Hydrogen"
        },
        {
            question: "Which country is known as the Land of the Rising Sun?",
            options: ["China", "South Korea", "Japan", "Thailand"],
            answer: "Japan"
        }
    ];

    function showQuestion(question) {
        questionElement.innerText = question.question;
        optionButtons.forEach((button, index) => {
            button.innerText = question.options[index];
            button.disabled = false;
            button.classList.remove('correct', 'wrong');
            button.addEventListener('click', () => selectAnswer(button, question.answer));
        });
    }

    function selectAnswer(button, correctAnswer) {
        optionButtons.forEach(btn => btn.disabled = true);
        if (button.innerText === correctAnswer) {
            score++;
            button.classList.add('correct');
        } else {
            button.classList.add('wrong');
            optionButtons.forEach(btn => {
                if (btn.innerText === correctAnswer) {
                    btn.classList.add('correct');
                }
            });
        }
        nextButton.disabled = false;
    }

    function startQuiz() {
        currentQuestionIndex = 0;
        score = 0;
        quizContainer.style.display = 'block';
        resultsContainer.style.display = 'none';
        showQuestion(questions[currentQuestionIndex]);
        nextButton.disabled = true;
    }

    function showResults() {
        quizContainer.style.display = 'none';
        resultsContainer.style.display = 'block';
        scoreElement.innerText = `You scored: ${score}/${questions.length}`;
    }

    nextButton.addEventListener('click', () => {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            showQuestion(questions[currentQuestionIndex]);
            nextButton.disabled = true;
        } else {
            showResults();
        }
    });

    startButton.addEventListener('click', startQuiz);

    startQuiz(); // Start the quiz initially
});
