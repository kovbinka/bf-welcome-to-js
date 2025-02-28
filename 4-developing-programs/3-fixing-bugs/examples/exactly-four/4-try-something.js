'use strict';

/* try something

  make a change and see what happens!
  try making one small change, predicting what will happen, then checking

  you don't need to fix everything in one experiment
    it's better to do many small, reversible changes than one huge one
  fixing bugs is not about flashes of brilliance
    it's about small and careful experimentation

*/

/* exactly 4

  a user can enter a number and know if it is 4 characters long
  - given the input is null, they canceled :(
  - given the input is sorter than 4, it is too short
  - given the input is longer than 4, it is too long
  - given the input is exactly 4 characters, it's perfect

  test cases:
  - given the input is null
    null -> 'you canceled :('
  - given the input is shorter than 4
    '' -> 'too short'
    'ab' -> 'too short'
    'abc' -> 'too short'
  - given the input is exactly 4
    'abcd' -> 'perfect!'
  - given the input is longer than 4
    'abcde' -> 'too long'
    'abcdef' -> 'too long'


--- experiments ---

  1. FAILING: 'abcd'
      EXPECT: 'perfect!'
      ACTUAL: 'too long'

    TRY: Adjust the conditions to correctly handle the exact length of 4.
    PREDICT: When the input is 'abcd', the message will display 'perfect!'.
    IT DID: The message displayed 'too long' instead.
    EXPLAIN: The condition `input.length >= 4` is true for all inputs with 4 or more characters,
             including 'abcd'. The 'perfect!' case is never reached.

--- lessons learned ---

    - When checking for a specific value (e.g., exactly 4 characters), use the equality check (`input.length === 4`).
    - The order of conditions is important: handle specific cases before general comparisons.


*/

const input = prompt('enter anything with 4 characters');

let message;
if (input === null) {
  message = 'you canceled :(';
} else {
  // 1. I thought this would be 'false' for input with length 4
  // if (input.length <= 4) {
  if (input.length < 4) {
    message = 'too short';
  } else if (input.length >= 4) {
    message = 'too long';
  } else {
    message = 'perfect!';
  }
}

alert(message);
