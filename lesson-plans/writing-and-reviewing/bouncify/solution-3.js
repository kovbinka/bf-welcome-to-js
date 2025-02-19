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

let userInput = '';

while (true) {
  userInput = prompt('Enter some text, the letters will be bouncified');

  if (userInput === null) {
    alert('there is no escape!');
  }

  if (userInput === '') {
    alert('No empty input, try again.');
  }

  if (userInput) {
    break;
  }
}

const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
let bouncified = '';
let isUpper = true;

for (const char of userInput) {
  if (alphabet.indexOf(char) === -1) {
    bouncified += char;
  } else {
    if (isUpper) {
      bouncified += char.toUpperCase();
    } else {
      bouncified += char.toLowerCase();
    }
    isUpper = !isUpper;
  }
}

alert(bouncified);
