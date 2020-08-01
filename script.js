var quiz = document.getElementById("quiz");
var question = document.getElementById("question");
var qImg = document.getElementById("qImg");
var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var scoreDiv = document.getElementById("scoreContainer");
var timer = [];
var scores = [];

//question variables:
let questions = [
    {
        question : "What does HTML stand for?",
        imgSrc : "img/html.png",
        choiceA : "Correct",
        choiceB : "Wrong",
        choiceC : "Wrong",
        correct : "A"
    },{
        question : "What does CSS stand for?",
        imgSrc : "img/css.png",
        choiceA : "Wrong",
        choiceB : "Correct",
        choiceC : "Wrong",
        correct : "B"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/js.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "Correct",
        correct : "C"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/js.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "Correct",
        correct : "C"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/js.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "Correct",
        correct : "C"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/js.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "Correct",
        correct : "C"
    }
];

// Alert to start the quiz:
alert("You have 1 Minute to complete this Quiz!  For every wrong answer you will get deducted 5 seconds!! Choose well....!")


let lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
let score = 0;

//start quiz


// countdown function

const startingMinutes = 1;
let time = startingMinutes * 60

const countdownEl = document.getElementById('countdown');

setInterval(updateCountdown, 1000);


renderQuestion();
    

function updateCountdown() {
    const minutes = Math.floor(time/60);
    let seconds = time % 60;

    timer = seconds;

    seconds = seconds < 10 ? '0' + seconds : seconds; 

    countdownEl.innerHTML = `${minutes}: ${seconds}`;
    time--;
    
    
     if (timer < 0) {
       scoreRender();
      clearInterval(startingMinutes);
   }
}
//render questions function:

function renderQuestion(){
    let q = questions[runningQuestion];
    
    question.innerHTML = "<p>"+ q.question +"</p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
}

function startQuiz(){
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
}

function answerIsCorrect(){
    
}

// answer is Wrong
function answerIsWrong(){
    time = time - 5

}

function checkAnswer(answer){
    if( answer == questions[runningQuestion].correct){
        // answer is correct
        score++;
        // change progress color to green
        answerIsCorrect();
    }else{
        // answer is wrong
        // change progress color to red
        answerIsWrong();
    }
    count = 0;
    if(runningQuestion < lastQuestion){
        runningQuestion++;
        renderQuestion();
    }
    
    else{
        // end the quiz and show the score
        clearInterval(startingMinutes);
        scoreRender();
    }
}

function scoreRender(){
    
    var playerInitials = prompt("Enter your intials!")
    console.log(playerInitials)
    

    scoreDiv.style.display = "block";
    
    // calculate the amount of question percent answered by the user
    const scorePerCent = Math.round(100 * score/questions.length);
    
    // choose the image based on the scorePerCent
    let img = (scorePerCent >= 80) ? "img/5.png" :
              (scorePerCent >= 60) ? "img/4.png" :
              (scorePerCent >= 40) ? "img/3.png" :
              (scorePerCent >= 20) ? "img/2.png" :
              "img/1.png";
    
    scoreDiv.innerHTML = "<img src="+ img +">";
    scoreDiv.innerHTML += "<p>"+"Thank you for playing " + playerInitials + " Your Score = " + scorePerCent + "%</p>";
    
    scores = localStorage.setItem(playerInitials, scorePerCent)

}
