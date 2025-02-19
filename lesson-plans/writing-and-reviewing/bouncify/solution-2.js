'use strict';

/* Bouncify

  A user can enter some text to bouncify it.
    - given a non-empty string
      every other letter is converted to UPPER CASE
      every other letter is converted to lower case
      all other characters are ignored without changing the pattern

  test cases:
    has only letters:
      'a'           -> 'A'
      'Hello'       -> 'HeLlO'
      'HELLO'       -> 'HeLlO'
      'cheese'      -> 'ChEeSe'
    has spaces and letters:
      'good bye'      -> 'GoOd ByE'
      ' row a boat '  -> ' RoW a BoAt '
    has everything:
      '12 Good Byes!'     -> '12 GoOd ByEs!'
      'h1! Hoe gaat het?' -> 'H1! hOe GaAt HeT?'
      '0 . x . 0'         -> '0 . X . 0'

*/

let userInput;

do {
  userInput = prompt('Enter some text, the letters will be bouncified');
  if (userInput === null) {
    alert('There is no escape!');
  } else if (userInput === '') {
    alert('No empty input, try again.');
  }
} while (userInput === null || userInput === '');

let bouncified = '';
let isUpper = true;
const pattern = /[a-z]/i;

for (let i = 0; i < userInput.length; i++) {
  const char = userInput[i];
  if (pattern.test(char)) {
    if (isUpper) {
      bouncified += char.toUpperCase();
    } else {
      bouncified += char.toLowerCase();
    }
    isUpper = !isUpper;
  } else {
    bouncified += char;
  }
}

alert(bouncified);
