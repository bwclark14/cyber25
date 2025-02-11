function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';
}

// Quiz functionality with multiple choice
const quizQuestions = [
    { 
        question: "What is the safest type of password?", 
        options: ["Your pet's name", "123456", "A mix of letters, numbers, and symbols", "Your birthdate"],
        answer: "A mix of letters, numbers, and symbols" 
    },
    { 
        question: "What should you do if you receive a suspicious email?", 
        options: ["Click the links to check", "Ignore it", "Do not click any links and report it", "Forward it to friends"],
        answer: "Do not click any links and report it" 
    }
];
let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    const quizContainer = document.getElementById('quiz-container');
    quizContainer.innerHTML = "";
    
    if (currentQuestion < quizQuestions.length) {
        const questionObj = quizQuestions[currentQuestion];
        const questionElement = document.createElement('p');
        questionElement.innerText = questionObj.question;
        quizContainer.appendChild(questionElement);
        
        questionObj.options.forEach(option => {
            const button = document.createElement('button');
            button.innerText = option;
            button.onclick = () => checkAnswer(option);
            quizContainer.appendChild(button);
        });
    } else {
        document.getElementById('quiz-score').innerText = `Score: ${score}/${quizQuestions.length}`;
    }
}

function checkAnswer(selectedOption) {
    if (selectedOption === quizQuestions[currentQuestion].answer) {
        score++;
    }
    currentQuestion++;
    loadQuestion();
}

// Load the first question initially
window.onload = loadQuestion;

// Cyber puzzle
const cipherText = "Uifsf jt b tfdsfu dpef!";
const decodedText = "There is a secret code!";

document.getElementById('cipher-text').innerText = cipherText;

function checkCipher() {
    const userAnswer = document.getElementById('cipher-answer').value;
    const feedback = document.getElementById('cipher-feedback');
    feedback.innerText = userAnswer === decodedText ? "Correct!" : "Try again.";
}

// Hacking simulation
const hiddenPassword = "s3cr3tP@ss"; // This can be found in source code
const socialPassword = "FluffySmithBlue42London"; // Based on user input trick questions
const commonPasswords = ["123456", "password", "123456789", "qwerty", "abc123", "password1", "111111", "123123", "12345", "iloveyou"];

// Display social engineering clues
const socialClues = `
    <p>Welcome to the Rockstar Name Generator! Answer the following:</p>
    <ul>
        <li>First pet's name: Fluffy</li>
        <li>Mother's maiden name: Smith</li>
        <li>Favorite color: Blue</li>
        <li>Favorite number: 42</li>
        <li>City of birth: London</li>
    </ul>
    <p>Your Rockstar Name: <strong>FluffySmith</strong></p>
    <p>Your Personality Type: <strong>Blue42London</strong></p>
`;
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById('social-engineering-info').innerHTML = socialClues;
});

function simulateHacking(event) {
    if (event.key === 'Enter') {
        const input = document.getElementById('hacking-input').value;
        const output = document.getElementById('hacking-output');
        
        if (input === hiddenPassword) {
            output.innerText = "Access granted! You found the hidden password.";
        } else if (input === socialPassword) {
            output.innerText = "Access granted! You deduced the password from social engineering.";
        } else if (commonPasswords.includes(input)) {
            output.innerText = "Access granted! You guessed a common password.";
        } else {
            output.innerText = "Access denied! Try again.";
        }
    }
}
