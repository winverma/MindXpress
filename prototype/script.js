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

    let questions = []; // Initialize an empty array for questions

    // Fetch questions from the database
    function fetchQuestions() {
        fetch('get_questions.php')
            .then(response => response.json())
            .then(data => {
                questions = data; // Assign fetched data to questions
                startQuiz(); // Start the quiz after fetching questions
            })
            .catch(error => console.error('Error fetching questions:', error));
    }

    function showQuestion(question) {
        questionElement.innerText = question.q_text; // Use q_text for the question
        optionButtons.forEach((button, index) => {
            button.innerText = question[`option_${String.fromCharCode(97 + index)}`]; // Set option text
            button.disabled = false; // Enable buttons
            button.classList.remove('correct', 'wrong'); // Remove previous states
        });
    }

    function selectAnswer(selectedButton, correctAnswer) {
        optionButtons.forEach(button => button.disabled = true); // Disable all buttons after selection
        if (selectedButton.innerText === correctAnswer) {
            score++;
            selectedButton.classList.add('correct'); // Highlight correct answer
        } else {
            selectedButton.classList.add('wrong'); // Highlight wrong answer
            optionButtons.forEach(button => {
                if (button.innerText === correctAnswer) {
                    button.classList.add('correct'); // Highlight the correct answer
                }
            });
        }
        nextButton.disabled = false; // Enable the next button
    }

    function startQuiz() {
        currentQuestionIndex = 0;
        score = 0;
        quizContainer.style.display = 'block'; // Show the quiz container
        resultsContainer.style.display = 'none'; // Hide results initially
        showQuestion(questions[currentQuestionIndex]); // Show the first question
        nextButton.disabled = true; // Disable next button until answer is selected
    }

    function showResults() {
        quizContainer.style.display = 'none'; // Hide quiz container
        resultsContainer.style.display = 'block'; // Show results container
        scoreElement.innerText = `You scored: ${score}/${questions.length}`; // Display the score
    }

    optionButtons.forEach(button => {
        button.addEventListener('click', () => {
            selectAnswer(button, questions[currentQuestionIndex].option_correct);
        });
    });

    nextButton.addEventListener('click', () => {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            showQuestion(questions[currentQuestionIndex]); // Show next question
            nextButton.disabled = true; // Disable next button until answer is selected
        } else {
            showResults(); // Show results if no more questions
        }
    });

    startButton.addEventListener('click', fetchQuestions); // Start quiz by fetching questions

    // Start the quiz by fetching questions when the document is ready
    fetchQuestions();
});
