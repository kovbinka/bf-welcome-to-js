'use strict';

/* expected behavior

  before trying to find out what's wrong, you need to know what "right" is!
  take some time understand what the program is SUPPOSED to do before running it

  some common ways to explain how a program should work are:
  - user stories
  - test cases (input/output pairs)

  the exercises in this folder all have user stories and test cases
  in other folders you will need to write these yourself

*/

/* exactly 4

  a user can enter a number and know if it is 4 characters long
  - given the input is null, they canceled :(
  - given the input is shorter than 4, it is too short
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

--- experiments ---

  1. FAILING: 'abcd'
      EXPECT: 'perfect!'
      ACTUAL: 'too short'

    TRY: Change the conditions to handle exactly 4 characters correctly.
    PREDICT: The message will display 'perfect!' when the input is exactly 4 characters long.
    IT DID: The message showed 'too short' instead of 'perfect!'.
    EXPLAIN: The condition `input.length <= 4` is true for the input 'abcd' (length 4),
             causing the code to set the message to 'too short' before checking the 'perfect!' condition.

--- lessons learned ---

    - Conditions should be written in the correct order to avoid premature matches.
    - The exact match (`input.length === 4`) should be checked before broader conditions (`<= 4` or `>= 4`).


*/

const input = prompt('enter anything with 4 characters');

let message;
if (input === null) {
  message = 'you canceled :(';
} else {
  if (input.length <= 4) {
    message = 'too short';
  } else if (input.length >= 4) {
    message = 'too long';
  } else {
    message = 'perfect!';
  }
}

alert(message);
