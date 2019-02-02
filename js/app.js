'use strict';

var userName = prompt('Hi, what is your name?');
console.log('userName');
alert('Nice to meet you ' + userName);

var ready = prompt('I have made a silly game of questions for you to get to know me a bit better! Boy, it is your lucky day! Are you ready to play '
 + userName + '?');
console.log('ready');
if (ready.toLowerCase() === 'yes' || ready.toLowerCase() === 'y') {
  alert('Let us begin.');
} else {
  alert('Aw cmon, no party poopers allowed!');
}

var cake = prompt('Do I like cake ' + userName + '?');
console.log('cake');
if (cake.toLowerCase() === 'yes' || cake.toLowerCase() === 'y') {
  alert('I actually prefer pie');
} else {
  alert('How did you know? I do love pie!');
}

var pets = prompt('Do I have any pets?');
console.log('pets');
if (pets.toLowerCase() === 'no' || pets.toLowerCase() === 'n') {
  alert('Correct, but I do love animals!');
} else {
  alert('No I do not, my last dog named Blue passed away and I am still sad (sad face)');
}
var nature = prompt('Could I survive the outdoors?');
console.log('nature');
if (nature.toLowerCase() === 'no' || nature.toLowerCase() === 'n') {
  alert('What?! Actually I can, I have taken several survival classes and hike into the "nothing" every chance I get.');
} else {
  alert('Like a pro, I have trained my whole life in tactical survival within several environments.');
}

var passion = prompt('Is having passion for what I do important to me?');
console.log('passion');
if (passion.toLowerCase() === 'yes' || passion.toLowerCase() === 'y') {
  alert('Yes, very important to me. It provides the reason behind my ambition and happiness.');
} else {
  alert('Of course it is, passion provides the reason behind my ambition and happiness.');
}
