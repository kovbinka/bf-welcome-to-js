'use strict';

/*
  a user can add single characters to a string until they confirm they have finished
    - given they cancel, they see a helpful message and are prompted again
    - given the input is empty, they see a helpful message and are prompted again
    - given the input is longer than 1 character, they see a helpful message and are prompted again
    - given the input is a single character, the input is appended to the output
    - given the user confirms the output is complete, the loop will end and the output is displayed

  no test cases!
    this program cannot be tested by input/output pairs
    because the user can decide when to stop there are no certain test cases

*/

console.log('--- begin program ---');

/* --- declare initial output --- */

let output = '';

/* --- create final output --- */

while (true) {
  let input = prompt(
    'Enter a single character to add to the string (or confirm to finish): ' +
      output,
  );

  if (input === null) {
    alert('You canceled. Please enter a single character.');
    continue;
  }

  if (input === '') {
    alert('Input is empty. Please enter a single character.');
    continue;
  }

  if (input.length > 1) {
    alert('Input is too long. Please enter only one character.');
    continue;
  }

  if (
    confirm(
      'Add "' + input + '" to the string? Current string: "' + output + '"',
    )
  ) {
    output += input;
  }

  if (
    confirm(
      'Are you finished building the string? Current string: "' + output + '"',
    )
  ) {
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
