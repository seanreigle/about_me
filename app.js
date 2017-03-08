'use strict';

var userName = prompt('What should I call you?');
alert('Okay, ' + userName + ', my name is Sean.');
console.log(userName + ' answered "What should I call you?" with ' + userName);

var userAck = prompt('Before you READ about me, let\'s play a game to get to know each other, shall we?');
  if (userAck.toLowerCase() === 'yes' || userAck.toLowerCase() === 'y') {
  alert('Let\'s do this!');
} else if (userAck.toLowerCase() === 'no' || userAck.toLowerCase () === 'n') {
  alert('Okay, fine, be that way...but I\'m still going to bother you with questions.');
} else if (userAck !==true){
  alert('Okaaaaay, let\'s move on');
  console.log(userName + ' answered "Before you READ about me, let\'s play a game to get to know each other, shall we?" with ' + userAck);
}
var playerReady = confirm ('Are you ready to play "The Guessing Game?"');
  if (playerReady == true) {
  alert('Okay! Let\'s Go!')
} else {
  alert('Okay, you\'re starting to piss me off. You can just read about me then. Have fun with that! Okay, just joking, let\'s move on');
  console.log(userName + ' answered "Are you ready to play "The Guessing Game?" with ' + playerReady);
}
var userAge = prompt ('How old do you think I am?');
  if (userAge > 33) {
  alert('Not sure if I should take that as a compliment or...')
} else {
  alert('Good guess! But I\'m a little older.');
  console.log(userName + ' answered "How old do you think I am?" with ' + userAge);
}
var myHairColor = prompt ('Is my hair brown?');
  if (myHairColor.toLowerCase() === 'yes' || myHairColor.toLowerCase() === 'y') {
  alert('Great job, ' +userName);
} else if (myHairColor.toLowerCase() === 'no' || myHairColor.toLowerCase () === 'n') {
  alert('You are wrong, ' + userName + '!');
} else if (myHairColor !==true){
  alert('It was a yes or no question, ' + userName);
  console.log(userName + ' answered "Is my hair brown?" with ' + myHairColor);
}
var myEyeColor = prompt ('Are my eyes brown?');
  if (myEyeColor.toLowerCase() === 'yes' || myEyeColor.toLowerCase() === 'y') {
  alert('I have a feeling we\'re going to be good friends, ' +userName);
} else if (myEyeColor.toLowerCase() === 'no' || myEyeColor.toLowerCase () === 'n') {
  alert('Wow, wrong, ' + userName);
} else if (myEyeColor !==true){
  alert('I said it was a yes or no question, ' + userName);
  console.log(userName + ' answered "Are my eyes brown?" with ' + myEyeColor);
}
var myHeight = prompt ('Am I taller than 6 feet?');
  if (myHeight.toLowerCase() === 'yes' || myHeight.toLowerCase() === 'y') {
  alert('Yeah, right, I wish, ' +userName);
} else if (myHeight.toLowerCase() === 'no' || myHeight.toLowerCase () === 'n') {
  alert('I wish I was a little bit taller, I wish I was a baller...');
} else if (myHeight !==true){
  alert('Why can\'t you answer with a yes or no?, ' + userName);
  console.log(userName + ' answered "Am I taller than 6 feet?" with ' + myHeight);
}
var myFacialHair = prompt ('Do I have facial hair?');
  if (myHeight.toLowerCase() === 'yes' || myHeight.toLowerCase() === 'y') {
  alert('You are good at this, ' +userName);
} else if (myHeight.toLowerCase() === 'no' || myHeight.toLowerCase () === 'n') {
  alert('I\'m trying to grow an impressive beard, you couldn\'t tell? Wrong, just wrong, ' + userName);
} else if (myHeight !==true){
  alert('Seriously? Yes or no questions, ' + userName);
  console.log(userName + ' answered "Do I have facial hair?" with ' + myFacialHair);
}
var myShirt = prompt ('Final question: Did I wear a blue shirt on Monday?');
  if (myHeight.toLowerCase() === 'yes' || myHeight.toLowerCase() === 'y') {
  alert('Good guess! You\'re right! ' +userName);
} else if (myHeight.toLowerCase() === 'no' || myHeight.toLowerCase () === 'n') {
  alert('You\'re right! Sike!');
} else if (myHeight !==true){
  alert('Okay, I\'m done with you, ' + userName);
  console.log(userName + ' answered "Finally question: Did I wear a a blue shirt on Monday?" with ' + myShirt);
}
confirm('Thanks for playing! Now you can read a little bit more about me.');
