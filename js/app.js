'use strict';

var correctCount = 0;

var userName = prompt('Hi, what is your name?');
console.log('userName');
alert('Nice to meet you ' + userName);

var ready = prompt('I have made a silly game of questions for you to get to know me a bit better! Boy, it is your lucky day! Are you ready to play '
 + userName + '?');

if (ready.toLowerCase() === 'yes' || ready.toLowerCase() === 'y') {
  alert('Let us begin.');
} else {
  alert('Aw cmon, no party poopers allowed!');
}
console.log('ready');

// First Question Starts Here
var cake = prompt('Do I like cake ' + userName + '?');
if (cake.toLowerCase() === 'yes' || cake.toLowerCase() === 'y') {
  alert('I actually prefer pie');
} else {
  alert('How did you know? I do love pie!');
  correctCount++;
}
console.log('cake');

var pets = prompt('Do I have any pets?');
console.log('pets');
if (pets.toLowerCase() === 'no' || pets.toLowerCase() === 'n') {
  alert('Correct, but I do love animals!');
  correctCount++;
} else {
  alert('No I do not, my last dog named Blue passed away and I am still sad (sad face)');
}
console.log('pets');

var nature = prompt('Could I survive the outdoors?');
if (nature.toLowerCase() === 'no' || nature.toLowerCase() === 'n') {
  alert('What?! Actually I can, I have taken several survival classes and hike into the "nothing" every chance I get.');
} else {
  alert('Like a pro, I have trained my whole life in tactical survival within several environments.');
  correctCount++;
}
console.log('nature');


var passion = prompt('Is having passion for what I do important to me?');
if (passion.toLowerCase() === 'yes' || passion.toLowerCase() === 'y') {
  alert('Yes, very important to me. It provides the reason behind my ambition and happiness.');
  correctCount++;
} else {
  alert('Of course it is, passion provides the reason behind my ambition and happiness.');
}
console.log('passion');


// how many hamburgers did i eat this week (8 is correct)
//only 4 guesses

var numGuess = 4;
var numBurger = '8';

var burger = prompt(userName + ', How many hamburgers do you think I ate this week?');
if(burger === '8') {
  alert('That is amazing, ' + userName + ', you must drive by McDonalds alot.');
  correctCount++;
} else if (burger < numBurger) {
  alert('Wrong! I am a hungry boy!');
} else if (burger > numBurger) {
  alert('I am not that fat!');
  numGuess--;
}
console.log(burger);

// question with several answers that are be correct, hold them in array
// user only needs one correct
//question is: what kind of cars have i owned? answer is: Nissan 300ZX, Chevy suburban, honda accord

var carsOwned = ['nissan 300zx', 'chevy suburban', 'honda accord'];
var carCounter = 0;
do {
  var carType = prompt(userName + ', try and guess what kind of cars I have owned throughout my life.');
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
    alert('This one could be a tricky one, keep guessing');
    carCounter++;
  }
}while (carCounter < 6);
console.log(carType);

alert(userName + ', all finished!.  Your score was ' + correctCount + ' out of 6.');

