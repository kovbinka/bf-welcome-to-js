'use strict';

/*
  log the user's input
  log the every character, no matter what they confirmed
*/

let phrase = null;
while (phrase === null) {
  phrase = prompt('enter a phrase');
  console.log(phrase); // log user's input
}


const keepLetters = confirm(
  '"ok" to remove everything that is not a letter\n' +
    '"cancel" to repeat each character',
);

let newPhrase = '';
if (keepLetters) {
  const letters = 'abcdefghijklmnopqrstuvwxyz';
  for (const character of phrase) {
    console.log(character); // logged the characters
    if (letters.includes(character.toLowerCase())) {
      newPhrase = newPhrase + character;
    }
  }
} else {
  for (const character of phrase) {
    console.log(character); // logged the characters
    newPhrase = newPhrase + character + character;
  }
}

alert(newPhrase);
