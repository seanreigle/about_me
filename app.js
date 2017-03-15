'use strict';

var userName = prompt('What should I call you?');
alert('Okay, ' + userName + ', my name is Sean.');
console.log(userName + ' answered "What should I call you?" with ' + userName);

function acknowledge() {
  var userAck = prompt('Before you READ about me, let\'s play a game to get to know each other, shall we?');
  if (userAck.toLowerCase() === 'yes' || userAck.toLowerCase() === 'y') {
    alert('Let\'s do this!');
  } else if (userAck.toLowerCase() === 'no' || userAck.toLowerCase () === 'n') {
    alert('Okay, fine, be that way...but I\'m still going to bother you with questions.');
  } else if (userAck !== true){
    alert('Okaaaaay, let\'s move on');
  }
  console.log(userName + ' answered "Before you READ about me, let\'s play a game to get to know each other, shall we?" with ' + userAck);
}

acknowledge();

function ready() {
  var playerReady = confirm ('Are you ready to play "The Guessing Game?"');
  if (playerReady == true) {
    alert('Okay! Let\'s Go!');
  } else {
    alert('Okay, you\'re starting to piss me off. You can just read about me then. Have fun with that! Okay, just joking, let\'s move on');
  }
  console.log(userName + ' answered "Are you ready to play "The Guessing Game?" with ' + playerReady);
}

ready();

function age() {
  var userAge = prompt ('How old do you think I am?');
  if (userAge > 33) {
    alert('Not sure if I should take that as a compliment or...');
  } else {
    alert('Good guess! But I\'m a little older.');
  }
  console.log(userName + ' answered "How old do you think I am?" with ' + userAge);
}

age();

function hair() {
  var myHairColor = prompt ('Is my hair brown?');
  if (myHairColor.toLowerCase() === 'yes' || myHairColor.toLowerCase() === 'y') {
    alert('Great job, ' + userName);
  } else if(myHairColor.toLowerCase() === 'no' || myHairColor.toLowerCase() === 'n') {
    alert('You are wrong, ' + userName + '!');
  } else if(myHairColor !== true){
    alert('It was a yes or no question, ' + userName);
  }
  console.log(userName + ' answered "Is my hair brown?" with ' + myHairColor);
}

hair();

function eye() {
  var myEyeColor = prompt ('Are my eyes brown?');
  if (myEyeColor.toLowerCase() === 'yes' || myEyeColor.toLowerCase() === 'y') {
    alert('I have a feeling we\'re going to be good friends, ' + userName);
  } else if (myEyeColor.toLowerCase() === 'no' || myEyeColor.toLowerCase () === 'n') {
    alert('Wow, wrong, ' + userName);
  } else if (myEyeColor !== true){
    alert('I said it was a yes or no question, ' + userName);
  }
  console.log(userName + ' answered "Are my eyes brown?" with ' + myEyeColor);
};

eye();

function height() {
  var myHeight = prompt ('Am I taller than 6 feet?');
  if (myHeight.toLowerCase() === 'yes' || myHeight.toLowerCase() === 'y') {
    alert('Yeah, right, I wish, ' + userName);
  } else if (myHeight.toLowerCase() === 'no' || myHeight.toLowerCase () === 'n') {
    alert('I wish I was a little bit taller, I wish I was a baller...');
  } else if (myHeight !== true){
    alert('Why can\'t you answer with a yes or no?, ' + userName);
  }
  console.log(userName + ' answered "Am I taller than 6 feet?" with ' + myHeight);
}

height();

function facial() {
  var myFacialHair = prompt ('Do I have facial hair?');
  if (myFacialHair.toLowerCase() === 'yes' || myFacialHair.toLowerCase() === 'y') {
    alert('You are good at this, ' + userName);
  } else if (myFacialHair.toLowerCase() === 'no' || myFacialHair.toLowerCase () === 'n') {
    alert('I\'m trying to grow an impressive beard, you couldn\'t tell? Wrong, just wrong, ' + userName);
  } else if (myFacialHair !== true){
    alert('Seriously? Yes or no questions, ' + userName);
  }
  console.log(userName + ' answered "Do I have facial hair?" with ' + myFacialHair);
}

facial();

function shirt() {
  var myShirt = prompt ('Final question: Did I wear a blue shirt on Monday?');
  if (myShirt.toLowerCase() === 'yes' || myShirt.toLowerCase() === 'y') {
    alert('Good guess! You\'re right! ' + userName);
  } else if (myShirt.toLowerCase() === 'no' || myShirt.toLowerCase () === 'n') {
    alert('You\'re right! Sike!');
  } else if (myShirt !== true){
    alert('Okay, I\'m done with you, ' + userName);
  }
  console.log(userName + ' answered "Finally question: Did I wear a a blue shirt on Monday?" with ' + myShirt);
}

shirt();

function another() {
  var anotherGame = prompt ('Want to play another guessing game?');
  if (anotherGame.toLowerCase() === 'yes' || anotherGame.toLowerCase() === 'y') {
    alert('Okay, let\'s do this');
  } else if (anotherGame.toLowerCase() === 'no' || anotherGame.toLowerCase() === 'no') {
    alert('No? You Sure?');
  } else if (anotherGame !== true){
    alert('You really don\'t like answering with a yes or no, do you? Well, you don\'t have a choice ', + userName);
  }
  console.log(userName + ' answered "Want to play another guessing game?" with ' + anotherGame);
}

another();

function computer() {
  var computerChoice = Math.floor((Math.random() * 10) + 1);
  var userGuess = 1;
  while (userGuess <= 4) {
    var userChoice = prompt('Guess my number. Pick a number between 1-10');
    userGuess++;
    if (userChoice == computerChoice) {
      alert('You\'re correct!');
      break;
    } else if (userChoice < computerChoice) {
      alert('You guessed lower than my number, try again!');
    } else if (userChoice > computerChoice) {
      alert('You guessed higher than my number, try again!');
    } else
      alert('You lose!');
  }
}

computer();

function answerFunc() {
  var myAnswers = ['band of brothers', 'casablanca', 'fences', 'arrival','hacksaw ridge','passengers','dr. strange','finding dora','moana','john wick'];
  for (i = 1; i < 7; i++){
    var userAnswer = prompt('Can you guess one of my favorite movies? Try: ' + i).toLowerCase();
    if( myAnswers.indexOf(userAnswer) != -1) {
      alert('Congrats! You guessed ' + i + ' times');
      break;
    }
    else {
      alert('Nope!');
    }
  }
}
answerFunc();
