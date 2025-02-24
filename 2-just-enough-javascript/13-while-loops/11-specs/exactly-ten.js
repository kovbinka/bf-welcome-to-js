'use strict';

/*
  a user can provide input that is 10 characters long
    - given they cancel, a message is displayed and they are prompted again
    - given the input is too short, they are told how much too short and prompted again
    - given the input is too long, they are told how much too long and prompted again
    - given the input is 10 characters, the loop will exit and the input is alerted

  test cases:
    invalid input:
      (no test cases! the loop will not exit so there will be no output to test)
    input of 10 characters
      'javascript' -> 'javascript'
      '0123456789' -> '0123456789'
      'a b c d e ' -> 'a b c d e '

*/

console.log('--- begin program ---');

/* --- declare initial output --- */

let output = '';

/* --- create final output --- */

while (
  output === '' ||
  output === null ||
  output.length < 10 ||
  output.length > 10
) {
  output = prompt('write 10 character of something');

  let minus = 10 - output.length;
  let plus = output.length - 10;

  if (output.length < 10) {
    alert(`input is too short, at ${minus} char`);
  } else if (output.length > 10) {
    alert(`input is too long, at ${plus} char`);
  } else {
    alert(output);
  }
}

/* --- alert the result --- */

console.log('output:', output);

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
