function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';
}

/*
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
*/

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

// Image Metadata Viewer Section
document.addEventListener("DOMContentLoaded", function () {
    const imageFiles = [
        "cat.jpg", "IMG_6972.jpg", "image3.jpg", "image4.jpg",
        "image5.jpg", "image6.jpg", "image7.jpg", "image8.jpg",
        "image9.jpg", "image10.jpg", "image11.jpg", "image12.jpg"
    ];

    const comments = [
        "My Cat", "Lego Street", "Mountain view", "City skyline",
        "Autumn leaves", "Snowy forest", "Desert dunes", "Ocean waves",
        "Countryside road", "Cherry blossoms", "Rainy night", "Northern lights"
    ];

    const container = document.querySelector(".image-container");

    imageFiles.forEach((src, index) => {
        const card = document.createElement("div");
        card.classList.add("image-card");

        const img = document.createElement("img");
        img.src = src;
        img.alt = `Image ${index + 1}`;

        const comment = document.createElement("p");
        comment.classList.add("comment");
        comment.textContent = comments[index];

        const button = document.createElement("button");
        button.textContent = "View Metadata";

        const metadataDiv = document.createElement("div");
        metadataDiv.classList.add("metadata");
        metadataDiv.style.display = "none";

        // Convert Degrees, Minutes, Seconds (DMS) to Decimal Coordinates
        function convertDMSToDecimal(dms, direction) {
            if (!dms) return null;
            let decimal = dms[0] + dms[1] / 60 + dms[2] / 3600;
            return direction === "S" || direction === "W" ? -decimal : decimal;
        }

        button.addEventListener("click", function () {
            if (metadataDiv.textContent === "") {
                EXIF.getData(img, function () {
                    let exifData = EXIF.getAllTags(this);

                    // Extract GPS Data
                    let latitude = convertDMSToDecimal(exifData.GPSLatitude, exifData.GPSLatitudeRef);
                    let longitude = convertDMSToDecimal(exifData.GPSLongitude, exifData.GPSLongitudeRef);
                    let gpsLink = latitude && longitude
                        ? `<br><strong>📍 Location:</strong> <a href="https://www.google.com/maps?q=${latitude},${longitude}" target="_blank">View on Google Maps</a>`
                        : "<br><strong>📍 Location:</strong> Not Available";

                    // Metadata Display
                    let metadataText = `
                        <strong>👤 Creator:</strong> ${exifData.Artist || "Unknown"}<br>
                        <strong>© Copyright:</strong> ${exifData.Copyright || "Unknown"}<br>
                        <strong>📷 Camera:</strong> ${exifData.Make || "Unknown"} ${exifData.Model || ""}<br>
                        <strong>📆 Date Taken:</strong> ${exifData.DateTimeOriginal || "Unknown"}<br>
                        <strong>🔆 ISO:</strong> ${exifData.ISOSpeedRatings || "Unknown"}<br>
                        <strong>⏳ Shutter Speed:</strong> ${exifData.ExposureTime ? exifData.ExposureTime + " sec" : "Unknown"}<br>
                        <strong>🌅 Aperture:</strong> f/${exifData.FNumber || "Unknown"}<br>
                        <strong>🔭 Focal Length:</strong> ${exifData.FocalLength ? exifData.FocalLength + "mm" : "Unknown"}<br>
                        <strong>⚡ Flash:</strong> ${exifData.Flash ? "Yes" : "No"}<br>
                        <strong>🎨 Software Used:</strong> ${exifData.Software || "Unknown"}<br>
                        <strong>📏 Image Dimensions:</strong> ${exifData.ExifImageWidth || "?"} x ${exifData.ExifImageHeight || "?"} px<br>
                        ${gpsLink}
                    `;

                    metadataDiv.innerHTML = metadataText;
                    metadataDiv.style.display = "block";
                });
            } else {
                metadataDiv.style.display = metadataDiv.style.display === "none" ? "block" : "none";
            }
        });

        card.appendChild(img);
        card.appendChild(comment);
        card.appendChild(button);
        card.appendChild(metadataDiv);

        container.appendChild(card);
    });
});

// Cyber Quiz Section Logic
const questions = [
    {
        question: "What is the capital of France?",
        options: {a: "Berlin", b: "Madrid", c: "Paris", d: "Rome"},
        correctAnswer: "c"
    },
    {
        question: "What is 2 + 2?",
        options: {a: "3", b: "4", c: "5", d: "6"},
        correctAnswer: "b"
    },
    // Add more questions as needed
];

let currentQuestion = 0;

function displayQuestion() {
    const questionData = questions[currentQuestion];
    document.getElementById("question").textContent = questionData.question;
    document.querySelector(".quiz-option:nth-child(1)").textContent = questionData.options.a;
    document.querySelector(".quiz-option:nth-child(2)").textContent = questionData.options.b;
    document.querySelector(".quiz-option:nth-child(3)").textContent = questionData.options.c;
    document.querySelector(".quiz-option:nth-child(4)").textContent = questionData.options.d;
    document.getElementById("quiz-result").textContent = "";
}

function checkAnswer(answer) {
    const questionData = questions[currentQuestion];
    if (answer === questionData.correctAnswer) {
        document.getElementById("quiz-result").textContent = "Correct!";
    } else {
        document.getElementById("quiz-result").textContent = "Incorrect, try again!";
    }

    // Move to the next question
    currentQuestion++;
    if (currentQuestion < questions.length) {
        setTimeout(displayQuestion, 1500);  // Delay for showing next question
    } else {
        document.getElementById("quiz-result").textContent = "Quiz Complete!";
    }
}

// Initialize the first question
displayQuestion();
