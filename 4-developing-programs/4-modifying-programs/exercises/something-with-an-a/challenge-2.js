'use strict';

/*
  modify the program so it searches for "A" or "a"

  you will need to change one condition
  the user's instructions
  and strings used to generate a reaction

  looking for a challenge?
    tell the user whether their input has "a" or "A"
*/

const userInput = prompt('please enter something with an "A or a" in it');

let reaction;
if (userInput === null || userInput === '') {
  reaction = 'nothing!  why !!! ??? !!!';
} else if (userInput.includes('a')) {
  reaction = '"' + userInput + '" is perfect!';
} else if (userInput.includes('A')) {
  reaction = '"' + userInput + '" is perfect!';
} else {
  reaction = '"' + userInput + '" has no "A or a" in it';
}

alert(reaction);
