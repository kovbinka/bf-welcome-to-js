'use strict';

/* actual behavior

  before looking too closely at the code, take some time to understand what it DOES do

  a good way to explain what the code DOES do is to see which test cases fail
  so run the program a few times trying out each test case

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

    TRY: Change the conditions to specifically handle the exact length of 4.
    PREDICT: If the input length is exactly 4, the message will be 'perfect!'.
    IT DID: The message still showed 'too short' because the first condition (<= 4) was true.
    EXPLAIN: The condition `input.length <= 4` triggers for any input of 4 characters or fewer,
             so the code never reaches the 'perfect!' case.

--- lessons learned ---

    - Conditional order matters! More specific conditions should be checked before broader ones.
    - Always test boundary values (e.g., exactly 4 characters) to catch logical errors.


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
