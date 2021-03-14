
function guessWhere(){
let guessWhere = prompt("Where is Roman from?");

 if (guessWhere === 'seattle')
 { 

alert ('the location you entered is correct');

}
else {
  alert ('you are wrong;');
 }
for (let i = 0;i<5;i++){
  console.log(i);
}

 'use strict';ss
let score = 0;
}
guessWhere();
S
function getName(){
   let userName = prompt('Please Enter your Name: ');
  alert('Welcome to my page, ' + userName + '!');
 }

 getName();

 function guessAge() {
  let ageAnswer = prompt('What is my age?');

  if (ageAnswer > 30) {
   alert('Too High');
 } else if (ageAnswer < 30) {
    alert('Too Low');
} else {
    alert('Correct!');
    score += 1;
   }
 }

 guessAge();

 function guessVisitPlace() {
  let visitPlaceAnswer = prompt('Yes or no, I like to visit Los Angeles.').toLowerCase();

  if (visitPlaceAnswer === 'yes') {
   alert('Yep!');
   score += 1;
 } else {
    alert('No, I like to visit Los Angeles');
  }
 }

 guessVisitPlace();

 function guessWhere() {
  let whereAnswer = prompt('Am I from Seattle?').toLowerCase();

  if (whereAnswer === 'yes') {
    alert('That is correct! I live in Seattle!');
    score += 1;
  } else {
    alert('No, I am from Seattle!');
  }
}

guessWhere();

function guessJob() {
  let jobAnswer = prompt('Have I worked for a medical laboratory?').toLowerCase();

  if (jobAnswer === 'yes') {
    alert('Correct!');
    score += 1;
  } else {
    alert('Nope, sorry, I did work for a medical laboratory!');
  }
}

guessJob();

function guessVacation() {
  let sportsAnswer = prompt('Have I visited France?').toLowerCase();

  if (sportsAnswer === 'yes') {
    alert('Yes!');
    score += 1;
  } else {
    alert('No.');
  }
}

guessVacation();

function numberGame1(correctAnswer, guesses) {
  for (let i = 0; i < guesses; i++) {
    let answer = parseInt(prompt('Please Enter a number 1-10'));
    if (answer === correctAnswer) {
      alert('Congratulations!');
      score += 1;
      break;
    } else if (answer > correctAnswer) {
      alert('Too high! Try Again!');
    } else if (answer < correctAnswer) {
      alert('Too low! Try Again!');
    }
  }
  alert('The answer is 3!');
}

numberGame1(3, 4);

function numberGameArray(answers, guess, maxGuess, isCorrectAnswer) {
  let userAnswer = parseInt(prompt('Give me a number between 1 and 100.'));
  console.log(userAnswer);

  while (guess < maxGuess) {
    for (let i = 0; i < answers.length; i += 1) {
      console.log(answers[i], userAnswer);
      if (answers[i] === userAnswer) {
        isCorrectAnswer = true;
        alert('Congrats! You are correct!');
        score += 1;
        break;
      }
    }
    guess += 1;
    if (isCorrectAnswer === true) {
      break;
    }
    userAnswer = parseInt(prompt('Guess again!'));
  }
  alert('Possible answers were '+answers+'.');
}

numberGameArray([2,12,65,34,98,3], 0, 6, false);

alert('Your score was ' + score + ' out of 7!');