// Wait for the page to load before running any JavaScript code
document.addEventListener('DOMContentLoaded', function() {


    var startBtn = document.querySelector('.start-btn');
    var infoBox = document.querySelector('.info-box');
    var restartBtn = document.querySelector('.restart');
    var quitBtn = document.querySelector('.quit');
    var quizForm = document.querySelector('#quiz-form');
    var question1 = document.querySelector(".question1");
    var question2 = document.querySelector(".question2");
    var question3 = document.querySelector(".question3");
    var pointsEl = document.querySelector('.high-score');
    
     
    infoBox.style.display = 'none';
    question1.style.display = 'none';
    question2.style.display = 'none';
    question3.style.display = 'none';
    pointsEl.style.display = 'none';
   

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

// Question 1 funciton

     function questionOne() {
      var secondsRemaining = 10; // set time limit for question 1
      var countdown = setInterval(function() {
        secondsRemaining--;
        document.getElementById("timer").innerHTML = secondsRemaining + " seconds remaining";
        if (secondsRemaining == 0) {
          clearInterval(countdown);
          document.getElementById("timer").innerHTML = "Time's up!";
        }
      }, 1000);
      question1.style.display = 'block';
      document.querySelector('#next1').addEventListener('click', function() {
        clearInterval(countdown); // clear current interval
        questionTwo(); // start next question
      });
    }

// Question 2 funtion


function questionTwo() {
  clearInterval(countdown); // clear any existing interval
  var secondsRemaining = 10;
  var countdown = setInterval(function() {
    secondsRemaining--;
    document.getElementById("timer").innerHTML = secondsRemaining + " seconds remaining";
    if (secondsRemaining == 0) {
      clearInterval(countdown);
      document.getElementById("timer").innerHTML = "Time's up!";
    }
  }, 1000);
  question2.style.display = 'block';
  document.querySelector('#next2').addEventListener('click', function() {
    clearInterval(countdown);
    questionThree();
  });
}


// Question 3 function

    function questionThree() {
      var secondsRemaining = 10; // set time limit for question 1
      var countdown = setInterval(function() {
        secondsRemaining--;
        document.getElementById("timer").innerHTML = secondsRemaining + " seconds remaining";
        if (secondsRemaining == 0) {
          clearInterval(countdown);
          document.getElementById("timer").innerHTML = "Time's up!";
        }
      }, 1000);
      question3.style.display = 'block';
      document.querySelector('#next3').addEventListener('click', function() {
        clearInterval(countdown); // clear current interval
        highScore();
      });
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
    var highScore = parseInt(localStorage.setItem('highScore'));
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

});
