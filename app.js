var name = prompt("Hello! What is your name?");

function check(){
    alert("Hey " +name+  "! You've just finished the test...");

    var question1 = document.quiz.question1.value;
  	var question2 = document.quiz.question2.value;
  	var question3 = document.quiz.question3.value;
  	var question4 = document.quiz.question4.value;
  	var question5 = document.quiz.question5.value;
  	var correct = 0;


  	if (question1 == "Mustafa Kemal Atatürk") {
  		correct++;
  }
  	if (question2 == "Ankara") {
  		correct++;
  }
  	if (question3 == "1923") {
  		correct++;
  	}
    if (question3 == "İstanbul") {
    		correct++;
    }
    if (question3 == "81") {
    		correct++;
    }

  	var pictures = ["img/success.gif", "img/ordinary.gif" "img/notbad.gif", "img/fail.gif"];
  	var messages = ["You are more than ordinary Turkish guy!", "You are ordinary Turkish guy!", "That's just okay", "You really need to do better"];
  	var score;

  	if (correct <=1) {
  		score = 3;
  	}

  	if (1 < correct < 3) {
  		score = 2;
  	}

  	if (3 <= correct < 5) {
  		score = 1;
  	}

  	if (correct == 5) {
  		score = 0;
  	}

  	document.getElementById("after_submit").style.visibility = "visible";

  	document.getElementById("message").innerHTML = messages[score];
  	document.getElementById("correct_answer_number").innerHTML = "You got " + correct + " correct.";
  	document.getElementById("picture").src = pictures[score];
}
