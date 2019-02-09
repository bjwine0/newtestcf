'use strict';

var correctCount = 0;

var userName = prompt('Hi, what is your name?');
console.log(userName);
alert('Nice to meet you ' + userName);

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

function cakeF(){
  var cake = prompt('Do I like cake ' + userName + '?');
    if (cake.toLowerCase() === 'yes' || cake.toLowerCase() === 'y') {
      alert('I actually prefer pie');
    } else {
      alert('How did you know the answer? Pie is actually my favorite!');
      correctCount++;
}
console.log(cake);
}

function petsFun){
  var pets = prompt('Do I have any pets?');
    console.log('pets');
  if (pets.toLowerCase() === 'no' || pets.toLowerCase() === 'n') {
    alert('Correct, but I do love animals!');
    correctCount++;
  } else {
    alert('No I do not, my last dog named Blue passed away and I am still sad (sad face)');
  }
  console.log(pets);
}

function survive(){
var nature = prompt('Could I survive the outdoors?');
if (nature.toLowerCase() === 'no' || nature.toLowerCase() === 'n') {
  alert('What?! Actually I can, I have taken several survival classes and hike into the "nothing" every chance I get.');
} else {
  alert('Like a pro, I have trained my whole life in tactical survival within several environments.');
  correctCount++;
}
console.log('nature');
}

function passionFun(){
var passion = prompt('Is having passion for what I do important to me?');
if (passion.toLowerCase() === 'yes' || passion.toLowerCase() === 'y') {
  alert('Yes, very important to me. It provides the reason behind my ambition and happiness.');
  correctCount++;
} else {
  alert('Of course it is, passion provides the reason behind my ambition and happiness.');
}
console.log('passion');
}

// how many hamburgers did i eat this week (8 is correct)
//only 4 guesses


function burgerFun(){
  var numGuess = 4;
    var numBurger = 8;
    while(numGuess > 0) {
      var burger = prompt(userName + ' how many hamburgers do you think I ate this week?');
      burger = parseInt(burger);
       if (burger === numBurger) {
        alert('That is amazing ' + userName + ' you guessed it.');
        correctCount++;
        break;
      } else if(burger > numBurger) {
        numGuess--;
        alert('That is too high!');
      } else if(burger < numBurger) {
        numGu(ess--;
        alert('That is too low!');
      } if (numGuess===0) {
        alert('You are out of attempst. The right answer is 8 burgers.');
      }
    }   
    console.log('user has guessed ' + burger);
    console.log(numGuess);
}


// question with several answers that are be correct, hold them in array
// user only needs one correct
//question is: what kind of cars have i owned? answer is: Nissan 300ZX, Chevy suburban, honda accord

var carsOwned = ['nissan 300zx', 'chevy suburban', 'honda accord'];
var carCounter = 0;
do {
  var carType = prompt('What make and model car have I owned before?');
  carType = carType.toLowerCase();
  if (carCounter === 6) {
    alert('You have run out of guesses.');
  }

  if (carsOwned.includes(carType)) {
    alert(userName + ', GREAT GUESS!!');
    correctCount++;
    break;
  }

  if (!carType.includes(carsOwned)) {
    alert('This is a tricky question, guess again.');
    carCounter++;
  }
}while (carCounter < 6);
console.log(carType);

alert(userName + ', all finished!.  Your score was ' + correctCount + ' out of 6.');

startFun();

cakeF();
petsFun();

osFunc();
travelFunc();

ageFunc();
petFunc();
satisfyFunc();
alert( name + ' you got ' + correctCounter + ' out of 6.');

