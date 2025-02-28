'use strict';

/* surprising lines

  step through the code in the debugger with your chosen test case
  do this a few times trying to predict what will happen before stepping

  take note of the lines that surprise you
    the lines you can't predict or explain
  those lines are probably part of the bug

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
      ACTUAL: 'too short'

    TRY: Reorder the conditions to check for exactly 4 characters first.
    PREDICT: The message will show 'perfect!' when the input is exactly 4 characters long.
    IT DID: The message displayed 'too short' instead.
    EXPLAIN: The condition `input.length <= 4` is true for all inputs with 4 or fewer characters,
             including 'abcd'. This prevents the code from reaching the 'perfect!' case.

--- lessons learned ---

    - The order of conditional checks matters: more specific cases (e.g., `input.length === 4`)
      should precede more general conditions (`<= 4` or `>= 4`).
    - Logical conditions should be carefully planned to avoid premature matches.


*/

const input = prompt('enter anything with 4 characters');

let message;
if (input === null) {
  message = 'you canceled :(';
} else {
  // 1. i thought this would evaluate to false when the input is 4 long
  if (input.length <= 4) {
    message = 'too short';
  } else if (input.length >= 4) {
    message = 'too long';
  } else {
    message = 'perfect!';
  }
}

alert(message);
