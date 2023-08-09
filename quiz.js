var questions = [
    {
        question: "What's the color of the sky?",
        answers: ["Red", "Blue", "Green", "Yellow"],
        correct: 1
    },
    {
        question: "What sound does a dog make?",
        answers: ["Moo", "Baa", "Woof", "Meow"],
        correct: 2
    },
    {
        question: "How many legs does a spider usually have?",
        answers: ["4", "6", "8", "10"],
        correct: 2
    },
    {
        question: "Which animal is known as the king of the jungle?",
        answers: ["Elephant", "Lion", "Tiger", "Giraffe"],
        correct: 1
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: ["Earth", "Mars", "Jupiter", "Venus"],
        correct: 1
    },
    {
        question: "What's the smallest prime number?",
        answers: ["0", "1", "2", "3"],
        correct: 2
    },
    {
        question: "What shape is a stop sign?",
        answers: ["Circle", "Triangle", "Square", "Octagon"],
        correct: 3
    },
    {
        question: "Which fruit is known as the king of fruits?",
        answers: ["Apple", "Mango", "Banana", "Grapes"],
        correct: 1
    },
    {
        question: "What gas do plants absorb from the atmosphere?",
        answers: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
        correct: 1
    },
    {
        question: "Which bird can fly backward?",
        answers: ["Eagle", "Hummingbird", "Sparrow", "Penguin"],
        correct: 1
    }
];

var currentQuestion = 0;
var score = 0;

function displayQuestion() {
    document.querySelector(".question").innerText = questions[currentQuestion].question;
    var options = document.querySelectorAll(".options button");
    for (var i = 0; i < options.length; i++) {
        options[i].innerText = questions[currentQuestion].answers[i];
    }
}

function checkAnswer(selected) {
    if (selected === questions[currentQuestion].correct) {
        document.querySelector(".feedback").innerText = "Correct!";
        score++;
        document.getElementById("score").innerText = score;
    } else {
        document.querySelector(".feedback").innerText = "Wrong! The correct answer is " + questions[currentQuestion].answers[questions[currentQuestion].correct];
    }
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        displayQuestion();
        document.querySelector(".feedback").innerText = "";
    } else {
        document.querySelector(".quiz-container").innerHTML = "<h1>You completed the quiz! Your score is: " + score + "</h1>";
    }
}

displayQuestion();
