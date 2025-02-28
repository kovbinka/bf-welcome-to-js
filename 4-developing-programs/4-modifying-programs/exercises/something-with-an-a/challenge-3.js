'use strict';

/*
  modify the program to search for "coffee" in the user's input

  upper or lower case is your choice
*/

const userInput = prompt('please enter something with an "coffee" in it');

let reaction;
if (userInput === null || userInput === '') {
  reaction = 'nothing!  why !!! ??? !!!';
} else if (userInput.includes('coffee')) {
  reaction = '"' + userInput + '" is perfect!';
} else {
  reaction = '"' + userInput + '" has no "coffee" in it';
}

alert(reaction);
