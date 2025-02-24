'use strict';

/*
  a user can input a non-empty string and it will be reversed
    - given the user cancels, they will be prompted again
    - given the input is empty, they will be prompted again
    - given their input is valid, the loop will exit and the reversed input will be displayed

  test cases:
    'hello' -> 'olleh'
    'p' -> 'p'
    'JavaScript' -> 'tpircSavaJ'

*/

console.log('--- begin program ---');

let input = null;
while (true) {
  input = prompt('Enter some text to reverse');

  if (input === null) {
    continue;
  }

  if (input === '') {
    continue;
  }

  break;
}
console.log('input:', input);

let output = '';

for (let char of input) {
  output = char + output;
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
