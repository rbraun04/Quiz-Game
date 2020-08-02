var quiz = document.getElementById("quiz");
var question = document.getElementById("question");
var qImg = document.getElementById("qImg");
var countdown = document.getElementById("countdown");
var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var scoreDiv = document.getElementById("scoreContainer");
var timer = [];
var scores = [];

//question variables:
let questions = [
    {
        question : "Where was Andy born?",
        choiceA : "Pittsburgh",
        choiceB : "Brooklyn",
        choiceC : "Chicago",
        correct : "A"
    },{
        question : "What religion did Andy practice?",
        choiceA : "Protestant",
        choiceB : "Catholic",
        choiceC : "Taoism",
        correct : "B"
    },{
        question : "What year was 'Campbell's Soup' painted?",
        choiceA : "1969",
        choiceB : "1970",
        choiceC : "1968",
        correct : "C"
    },{
        question : "Who tried to kill Warhol?",
        choiceA : "Valerie Solanas",
        choiceB : "Steve McQueen",
        choiceC : "Elizabeth Taylor",
        correct : "A"
    },{
        question : "What graffiti artist paid homage to Andy?",
        choiceA : "RETNA",
        choiceB : "Banksy",
        choiceC : "Fab Five Freddy",
        correct : "C"
    }
];

// Alert to start the quiz:
alert("You have 1 Minute to complete this Quiz!  For every wrong answer you will lose 5 seconds!! Goodluck....!")


let lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
let score = 0;



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
      countdown.style.display = "none";

    
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

//answer is Correct

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
        time = 0;
        scoreRender();
        countdown.style.display = "none";
    }
}

function scoreRender(){
    
    var playerInitials = prompt("Enter your initials!")
    console.log(playerInitials)
    

    scoreDiv.style.display = "block";
    
    // percent correct 
    const scorePerCent = Math.round(100 * score/questions.length);
    
    
    scoreDiv.innerHTML += "<p>"+"Thank you for playing " + playerInitials + " your score is " + scorePerCent + "%!</p>";
    
    scores = localStorage.setItem(playerInitials, scorePerCent)

}
