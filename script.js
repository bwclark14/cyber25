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

document.getElementById('cipher-text').innerText = `Cipher Text: ${cipherText}`;

function checkCipher() {
    const userAnswer = document.getElementById('cipher-answer').value;
    const feedback = document.getElementById('cipher-feedback');
    feedback.innerText = userAnswer === decodedText ? "Correct!" : "Try again.";
}

// Caesar Cipher Puzzle
const caesarCipherText = "Khoor Zruog!"; // "Hello World!" shifted by 3

document.getElementById('caesar-cipher-text').innerText = `Cipher Text: ${caesarCipherText}`;

function checkCaesarCipher() {
    const userAnswer = document.getElementById('caesar-answer').value;
    const feedback = document.getElementById('caesar-feedback');
    feedback.innerText = userAnswer === "Hello World!" ? "Correct!" : "Try again.";
}

// Atbash Cipher Puzzle
const atbashCipherText = "Zftzg R’n gsv Xlmhgsr!"; // "This is the Cipher!" in Atbash Cipher

document.getElementById('atbash-cipher-text').innerText = `Cipher Text: ${atbashCipherText}`;

function checkAtbashCipher() {
    const userAnswer = document.getElementById('atbash-answer').value;
    const feedback = document.getElementById('atbash-feedback');
    feedback.innerText = userAnswer === "This is the Cipher!" ? "Correct!" : "Try again.";
}

// Hacking Challenges
const hiddenPassword = "s3cr3tP@ss"; // Found in source code
const socialPassword = "FluffySmithBlue42London"; // Derived from social engineering clues
const commonPasswords = ["123456", "password", "qwerty", "letmein", "admin"];

function checkPassword(inputId, correctPassword) {
    const userPassword = document.getElementById(inputId).value;
    const output = document.getElementById(inputId + '-output');
    output.innerText = userPassword === correctPassword ? "Correct!" : "Try again.";
}

function checkCommonPassword() {
    const userPassword = document.getElementById("common-password").value;
    const output = document.getElementById("common-password-output");
    output.innerText = commonPasswords.includes(userPassword) ? "Common password! Try again." : "Good guess!";
}

// Social Engineering Clues - Directly add this to the social engineering section
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

// Ensure the content is updated after the page loads
document.addEventListener("DOMContentLoaded", () => {
    const socialEngineeringSection = document.getElementById('social-engineering-info');
    if (socialEngineeringSection) {
        socialEngineeringSection.innerHTML = socialClues;
    }
});
