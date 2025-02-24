'use strict';

/* Challenge: write this program using `break` and `continue`

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

console.log('--- begin program ---');

/* --- gather user input --- */

let input = '';
let pattern = /[^a-z]/i;
while (true) {
  input = prompt('Enter text to see bouncy string:');

  if (pattern.test(input)) {
    continue;
  }

  if (input) {
    break;
  }
}
console.log('input:', input);

/* --- declare initial output --- */

let output = '';
let i = 0;

/* --- create final output --- */

for (let char of input) {
  if (i % 2) {
    output += char.toUpperCase();
  } else {
    output += char.toLowerCase();
  }
  i++;
}

/* --- alert the result --- */

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