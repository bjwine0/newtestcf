'use strict';

var correctCount = 0;

var userName = prompt('Hi, what is your name?');
console.log(userName);
alert('Nice to meet you ' + userName + '!');


function startFun(){
  var ready = prompt('I have made a silly game of questions for you to get to know me a bit better! Boy, it is your lucky day! Are you ready to play '
 + userName + '?');
  if (ready.toLowerCase() === 'yes' || ready.toLowerCase() === 'y') {
    alert('Let us begin.');
  } else {
    alert('Aw cmon, no party poopers allowed!');
  }
  console.log(ready);
}
startFun();

function cakeF(){
  var cake = prompt('Do I like cake ' + userName + '?');
  if (cake.toLowerCase() === 'yes' || cake.toLowerCase() === 'y') {
    alert('I actually prefer pie!');
  } else {
    alert('How did you know the answer? Pie is actually my favorite!');
    correctCount++;
  }
  console.log(cake);
}
cakeF();

function petsFun(){
  var answer = prompt(userName + ' do you think I like pets?');
  if (answer.toLowerCase() === 'yes' || answer.toLowerCase() === 'y') {
    alert('Correct, I love pets.');
    correctCount++;
  } else {
    alert('Actually, I do love pets.');
  }
  console.log(answer);
}
petsFun();

function survive(){
  var nature = prompt('Could I survive the outdoors?');
  if (nature.toLowerCase() === 'no' || nature.toLowerCase() === 'n') {
    alert('What?! Actually I can, I hike into the "nothing" every chance I get.');
  } else {
    alert('Yes, I love the outdoors. I hike into the "nothing" every chance I get.');
    correctCount++;
  }
  console.log(nature);
}
survive();

function passionFun(){
  var passion = prompt('Is having passion for what I do important to me?');
  if (passion.toLowerCase() === 'yes' || passion.toLowerCase() === 'y') {
    alert('Yes, very important to me. It provides the reason behind my ambition and happiness.');
    correctCount++;
  } else {
    alert('Actually it is, passion provides the reason behind my ambition and happiness.');
  }
  console.log(passion);
}
passionFun();

//Question 6

function burgerFun() {
  var burgersAte = '8';
  var guessesUsed = 0;
  var guessesLeft = 3;
  while (guessesUsed <= 3) {
    var burgersEatenGuess = prompt('How many burgers have I eaten this week?');
    if (burgersAte === burgersEatenGuess) {
      alert('Correct!');
      correctCount++;
      console.log( correctCount, guessesUsed, guessesLeft, burgersEatenGuess);
      break;
    } else if (burgersAte > burgersEatenGuess) {
      alert('Too low, you have ' + guessesLeft + ' guesses left.');
      guessesUsed++;
      guessesLeft--;
      console.log( correctCount, guessesUsed, guessesLeft, burgersEatenGuess);
    } else if (burgersAte < burgersEatenGuess) {
      alert('Too high, you have ' + guessesLeft + ' guesses left.');
      guessesUsed++;
      guessesLeft--;
      console.log( correctCount, guessesUsed, guessesLeft, burgersEatenGuess);
    } if (guessesUsed === 4) {
      alert('The answer is 8 burgers.');
    }
  }
}
burgerFun();



// question with several answers that are be correct, hold them in array
// user only needs one correct 6 guesses
//question is: what kind of cars have i owned? answer is: Nissan 300ZX, Chevy suburban, honda accord

// function carFun(){
//   var carsOwned = ['nissan 300zx', 'chevy suburban', 'honda accord'];
//   var carCounter = 6
//   while(carCounter > 0) {
//     var carType = prompt('What make and model car have I owned before?');
//     if (carsOwned.includes(carType)) {
//       alert(userName + ', GREAT GUESS!!');
//       console.log(carType);
//       correctCount++;
//       break;
//   }




//     var carType = prompt('What make and model car have I owned before?');
//     if (carsOwned.includes(carType)) {
//       alert(userName + ', GREAT GUESS!!');
//       console.log('car ' + correctCount);
//       correctCount++;
//       break;
//     } if (!carType.includes(carsOwned)) {
//       alert('This is a tricky question, guess again.');
//       carCounter++;
//       console.log(carCounter);
//     } while (carCounter < 6); {
//     alert('I have driven a nissan 300zx, chevy suburban, and a honda accord.');
//     }
    
// } 
// carFun();

if (correctCount >= 4) {
  alert('Thanks for playing my game, you anwered ' + correctCount + ' correctly. I feel like we know each other already!');
} else {
  alert('Thanks for playing my game, you anwered ' + correctCount + ' correctly. Contact me so we can get to know each other better!');
}


