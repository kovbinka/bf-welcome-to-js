'use strict';

/*
  log the user's input
  log the user's choice (keep or remove)
  log the final output
*/

let phrase = null;
while (phrase === null) {
  phrase = prompt('enter a phrase');
  console.log(phrase);
}

const keepLetters = confirm(
  '"ok" to remove everything that is not a letter\n' +
    '"cancel" to repeat each character',
);

let newPhrase = '';
if (keepLetters) {
  const letters = 'abcdefghijklmnopqrstuvwxyz';
  for (const character of phrase) {
    if (letters.includes(character.toLowerCase())) {
      newPhrase = newPhrase + character;
    }
    console.log(newPhrase); // log removing or keeping if it's letters
  }
} else {
  for (const character of phrase) {
    newPhrase = newPhrase + character + character;
  }
  console.log(newPhrase); // log repeat
}

alert(newPhrase);
console.log(newPhrase); // log result
