'use strict';

/* Bouncy String

  a user can input string of letters to be converted into a bouncy string
    (a bouncy string is one with every other letter uppercase)
    - given the user cancels, they will be prompted again
    - given the input is empty, they will be prompted again
    - given their input contains anything that is not a letter, they will be prompted again
    - given their input is valid, the loop will exit and their bouncy string will be displayed


  test cases:
    uppercase strings:
      'ABCDEF' -> 'aBcDeF'
      'JELLO' -> 'jElLo'
    lowercase strings:
      'abcdef' -> 'aBcDeF'
      'jello' -> 'jElLo'
    mixed strings:
      'AbCdEf' -> 'aBcDeF'
      'jElLo' -> 'jElLo'
*/

let input = null;
while (true) {
  input = prompt('enter some text with only letters');
  console.log(input);


  if (input === null) {
    continue;
  }

  if (input === '') {
    continue;
  }

  let onlyLetters = true;
  for (let char of input) {
    if (!'abcdefghijklmnopqrstuvwxyz'.includes(char.toLowerCase())) {
      onlyLetters = false;
    }
  }
  if (!onlyLetters) {
    continue;
  }

  break;
}
console.log(input);

let bouncy = '';

let isBigLetter = false;
for (let letter of input) {
  if (isBigLetter) {
    bouncy = bouncy + letter.toLocaleUpperCase();
  } else {
    bouncy = bouncy + letter.toLocaleLowerCase();
  }
  isBigLetter = !isBigLetter;
}

alert(bouncy);