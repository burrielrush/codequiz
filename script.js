// Wait for the page to load before running any JavaScript code
document.addEventListener('DOMContentLoaded', function() {

    // Get references to the elements we need to interact with
    var startBtn = document.querySelector('.start-btn');
    var infoBox = document.querySelector('.info-box');
    var restartBtn = document.querySelector('.restart');
    var quitBtn = document.querySelector('.quit');
    var quizForm = document.querySelector('#quiz-form');
    var question1 = document.querySelector(".question1");
    var question2 = document.querySelector(".question2");
    var question3 = document.querySelector(".question3");
    var pointsEl = document.querySelector('.high-score');
    
     // Hide the info box and quiz form initially
    infoBox.style.display = 'none';
    question1.style.display = 'none';
    question2.style.display = 'none';
    question3.style.display = 'none';
    pointsEl.style.display = 'none';
    // When the user clicks the start button, show the info box
      startBtn.addEventListener('click', function() {
      startBtn.style.display = 'none';
      infoBox.style.display = 'block';
    });

  
    // When the user clicks the "I give up" button, hide the info box and start button and show the quiz form
    quitBtn.addEventListener('click', function() {
      infoBox.style.display = 'none';
      startBtn.style.display = 'block';
    });
  
    // When the user clicks "I give up" the quiz is reset
    restartBtn.addEventListener('click', function() {
        infoBox.style.display = 'none';
        startBtn.style.display = 'none';
        questionOne(); 
    });
     function questionOne() {
        question1.style.display = 'block';
        document.querySelector('#next1').addEventListener('click', questionTwo);
     }
     function questionTwo() {
        question1.style.display = 'none';
        question2.style.display = 'block';
        document.querySelector('#next2').addEventListener('click', questionThree);
     }
     function questionThree() {
        question2.style.display = 'none';
        question3.style.display = 'block';
        document.querySelector('#next3').addEventListener('click', points);


     }
    // When the user sumbits their answer, thier score is displayed
    quizForm.addEventListener('submit', function(event) {
      event.preventDefault();
      var score = 0;
      var q1Answer = document.querySelector('input[name="q1"]:checked');
      var q2Answer = document.querySelector('input[name="q2"]:checked');
      var q3Answer = document.querySelector('input[name="q3"]:checked');
  
      // Check each answer and add to the score if correct
      if (q1Answer && q1Answer.value === 'a') {
        score++;
      }
      if (q2Answer && q2Answer.value === 'b') {
        score++;
      }
      if (q3Answer && q3Answer.value === 'b') {
        score++;
      }
     
      // Show the user their score
      alert('Your score is ' + score + '/3' );
    });

    // When the user submits the quiz form, check for a new high score
quizForm.addEventListener('submit', function(event) {
    event.preventDefault();
    var score = 0;
    var highScore = parseInt(localStorage.getItem('highScore'));
    if (isNaN(highScore) || score > highScore) {
      localStorage.setItem('highScore', score);
    }
  });
  
  // When the user clicks the high score button, display the high score

var highScoreBtn = document.querySelector('.high-score-button');
var highScore = document.querySelector('.high-score');

function points() {
    question3.style.display = 'none';
    pointsEl.style.display = 'block';

}

highScoreBtn.addEventListener('click', function() {
   highScore.style.display = 'block';
});

var seconds = 10;
var countdown = setInterval(function() {
  seconds--;
  document.getElementById("timer").innerHTML = seconds + " seconds remaining";
  if (seconds == 0) {
    clearInterval(countdown);

    document.getElementById("timer").innerHTML = "Time's up!";
  }
}, 1000);

});

  
