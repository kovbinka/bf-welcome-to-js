'use strict';

/*
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

let input = null;
const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

while (true) {
  input = prompt('Enter a string of letters to double each one');

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

for (let char of input) {
  output += char + char;
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
