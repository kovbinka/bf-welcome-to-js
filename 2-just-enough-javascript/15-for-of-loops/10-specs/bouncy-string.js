'use strict';

/*
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
      'jElLo' -> jElLo'
*/

'use strict';

console.log('--- begin program ---');

let input = null;
const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

while (true) {
  input = prompt('Enter a string of letters to make bouncy (every other letter uppercase)');

  if (input === null) {
    continue;
  }

  if (input === '') {
    continue;
  }

  let isValid = true;
  for (let char of input) {
    if (!alphabet.includes(char)) {
      isValid = false;
      break;
    }
  }

  if (isValid) {
    break;
  }
}
console.log('input:', input);

let output = '';

for (let i = 0; i < input.length; i++) {
  if (i % 2 === 0) {
    output += input[i].toLowerCase();
  } else {
    output += input[i].toUpperCase();
  }
}

console.log('output:', output);
alert(output);

console.log('--- end program ---');

/*
  checklist:
    [x] the code is formatted
    [x] linting check passes
    [x] variable names are clear and helpful
    [x] each line of code is explained in a comment above that line
      - use full sentences and correct JS vocabulary
    [x] the program runs
    [x] the program has no errors
    [x] all of the test cases work
    [x] you tested strange inputs that could break your program (edge cases)
*/
