// #todo

'use strict';

/*
  a user can provide input that contains only uppercase and lowercase letters
    - given the user cancels, they will be prompted again
    - given the input is empty, they will be prompted again
    - given their input contains anything that is not a letter, they will be prompted again
    - given their input is valid, the loop will exit and their input is alerted

  test cases:
    invalid input:
      (no test cases! the loop will not exit so there will be no output to test)
    input with only letters:
      'abcdABCD' -> 'abcdABCD'
      'JAVAscript' -> 'JAVAscript'
      'hi' -> 'hi'

*/

console.log('--- begin program ---');

/* --- declare initial output --- */

let output = '';

/* --- create final output --- */

const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

while (true) {
  output = prompt('Type only letters');

  if (output === null) {
    continue;
  }

  if (output === '') {
    continue;
  }

  let isValid = true;
  for (let i = 0; i < output.length; i++) {
    if (!alphabet.includes(output[i])) {
      isValid = false;
      break;
    }
  }

  if (isValid) {
    break;
  }
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
