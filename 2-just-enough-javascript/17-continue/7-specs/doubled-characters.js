'use strict';

/* Challenge: write this program using `break` and `continue`

  a user can input string of letters (upper or lower case), each letter will be doubled
    - given the user cancels, they will be prompted again
    - given the input is empty, they will be prompted again
    - given their input contains anything that is not a letter, they will be prompted again
    - given their input is valid, the loop will exit and the letters of their input will be doubled


  test cases:
    no doubled letters:
      'ABC' -> 'AABBCC'
      'abc' -> 'aabbcc'
      'AbC' -> 'AAbbCC'
    some doubled letters:
      'abbcc' -> 'aabbbbcccc'
      'jello' -> 'jjeelllloo'
*/

console.log('--- begin program ---');

/* --- gather user input --- */

let input = '';
let pattern = /[^a-z]/i;

while (true) {
  input = prompt('Enter text to see doubled letter');

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

/* --- create final output --- */

for (let char of input) {
  output += char + char;
}

console.log('output:', output);

/* --- alert the result --- */

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