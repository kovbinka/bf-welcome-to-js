'use strict';

/* Challenge: write this program using at least 1 `break`

  a user can provide input that starts with a capital letter and ends with a period
    - given the user cancels, they will be prompted again
    - given the input is shorter than two characters, they will be prompted again
    - given their input does not begin with a capital letter, they will be prompted again
    - given their input does not end with a period, they will be prompted again
    - given their input is valid, the first letter will be lower-cased and the period removed
    - given their input is valid, the loop will exit

  test cases:
    invalid input:
      (no test cases! the loop will not exit so there will be no output to test)
    two-character input:
      'A.' -> 'a'
      'X.' -> 'x'
    longer words:
      'Hello.' -> 'hello'
      'JavaScript!.' -> 'javaScript!'
    with some spaces:
      'Hello World.' -> 'hello World'
      'Hack your future.' -> 'hack your future'

*/

console.log('--- begin program ---');

/* --- declare initial output --- */

let input = null;
let output = '';

/* --- create final output --- */

while ( !input || input.length < 2 || !/[A-Z]/u.test(input.charAt(0)) || input.charAt(input.length - 1) !== '.') {
  input = prompt(
    'Please enter text that starts with a capital letter and ends with a period:',
  );
}

let i = 1;

for (let char of input) {
  if (i === 1) {
    output += char.toLowerCase();
  } else if (i !== input.length) {
    output += char;
  } else {
    break;
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
