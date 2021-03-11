// let guessWhere = prompt("Where is Roman from?") {

// if (guessWhere === 'seattle');

// {

//   alert ('the location you entered is correct');

// }
// else{
//   alert('you are wrong:');
// }
// for (let i = 0;i<5;i++){
//   console.log(i);
// }


'use strict';

let totalCorrectAnswers = 0;

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
    totalCorrectAnswers += 1;
  }
}

guessAge();

function guessVisitPlace() {
  let visitPlaceAnswer = prompt('Yes or no, I like to visit Los Angeles.').toLowerCase();

  if (visitPlaceAnswer === 'yes') {
    alert('Yep!');
    totalCorrectAnswers += 1;
  } else {
    alert('No, I like to visit Los Angeles');
  }
}

guessVisitPlace();

function guessWhere() {
  let whereAnswer = prompt('Am I from Seattle?').toLowerCase();

  if (whereAnswer === 'yes') {
    alert('That is correct! I live in Seattle!');
    totalCorrectAnswers += 1;
  } else {
    alert('No, I am from Seattle!');
  }
}

guessWhere();

function guessJob() {
  let jobAnswer = prompt('Have I worked for a medical laboratory?').toLowerCase();

  if (jobAnswer === 'yes') {
    alert('Correct!');
    totalCorrectAnswers += 1;
  } else {
    alert('Nope, sorry, I did work for a medical laboratory!');
  }
}

guessJob();

function guessVacation() {
  let sportsAnswer = prompt('Have I visited France?').toLowerCase();

  if (sportsAnswer === 'yes') {
    alert('Yes!);
    totalCorrectAnswers += 1;
  } else {
    alert('No.');
  }
}

guessVacation();

function numberGame1(correctAnswer, guesses) {
  for (let i = 0; i < guesses; i++) {
    let answer = parseInt(prompt('Please Enter a number 1-10'));
    if (answer === correctAnswer) {
      alert('Congratulation!');
      totalCorrectAnswers += 1;
      break;
    } else if (answer > correctAnswer) {
      alert('Too high! Try Again!');
    } else if (answer < correctAnswer) {
      alert('Too low! Try Again!');
    }
  }
  alert('The answer is 6!');
}

numberGame1(6, 4);

function numberGameArray(possibleAnswers, guess, maxGuess, isCorrectAnswer) {
  let userAnswer = parseInt(prompt('Guess a number in my array 1-50!'));

  while (guess < maxGuess) {
    for (let i = 0; i < possibleAnswers.length; i += 1) {
      if (possibleAnswers[i] === userAnswer) {
        isCorrectAnswer = true;
        alert('Congrats! You got it right!');
        totalCorrectAnswers += 1;
        break;
      }
    }
    guess += 1;
    if (isCorrectAnswer === true) {
      break;
    }
    userAnswer = prompt('Guess again! Guess a number in my array 1-50!');
  }
  alert('The answers were '+possibleAnswers+'.');
}

numberGameArray([34, 9, 14, 26, 43, 2], 0, 6, false);

alert('Okay, you got ' + totalCorrectAnswers + ' correct out of 7!');