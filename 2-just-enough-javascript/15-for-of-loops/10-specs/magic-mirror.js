'use strict';

/*
  a user can input a non-empty string and only the letters will be turned into a mirror
    - given the user cancels, they will be prompted again
    - given the input is empty, they will be prompted again
    - given their input is valid, the loop will exit and the mirrored letters will be displayed

  test cases:
    only letters:
      'abc' -> 'abc|cba'
      'hello' -> 'hello|olleh'
      'JavaScript' -> 'JavaScript|tpircSavaJ'
    only not-letters:
      '.(-).' -> '|'
      '-=>|<=-' -> '|'
      '. - ^ - .' -> '|'
    mixed letters and not-letters:
      'hello!' -> 'hello|olleh'
      'good bye?' -> 'goodbye|eybdoog'
      'let input = ""' -> 'letinput|tupnitel'

*/

console.log('--- begin program ---');

let input = null;
while (true) {
  input = prompt('Enter some text, letters will be mirrored');

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
let lettersOnly = '';
const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

for (let char of input) {
  if (alphabet.includes(char)) {
    lettersOnly += char;
  }
}

output = lettersOnly + '|' + lettersOnly.split('').reverse().join('');

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
