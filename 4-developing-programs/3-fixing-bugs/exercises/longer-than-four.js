'use strict';

/* longer than 4

  a user can exit the loop by canceling or entering something longer than 4 characters
  - given the user cancels, the program tells them they canceled
  - given the user input is shorter than or equal to  4 characters, the loop continues
  - given the user input is longer than 4 characters, the loop exits

  test cases:
    null -> 'you canceled'
    'abcde' -> 'abcde'
    'javascript' -> 'javascript'
    'you canceled' -> 'you canceled'

--- experiments ---

  1. FAILING: 'hello'
      EXPECT: The prompt should close and show 'hello' in the alert.
      ACTUAL: The prompt kept repeating, not accepting the input 'hello' as valid.

    TRY: Correct the condition to properly check the length of the input.
    PREDICT: The input 'hello' (5 characters) will end the loop and show 'hello' in the alert.
    IT DID: The prompt still looped endlessly.
    EXPLAIN: The condition `input > 4` compares the input string lexicographically to the number 4,
             which is not a valid or logical comparison. Strings cannot be directly compared to numbers in this way.

--- lessons learned ---

    - When comparing string lengths, use `input.length` instead of comparing the string directly to a number.
    - The correct condition should be `if (input.length > 4)` instead of `if (input > 4)`.
    - Also, avoid redeclaring the `input` variable inside the loop, as it shadows the outer `input` variable,
      causing confusion and preventing the alert from displaying the correct value.

    Corrected code:

    ```js
    let input = '';

    let prompting = true;
    while (prompting) {
      input = prompt(
        'enter something longer than 4 characters, or "cancel" to leave',
      );
      if (input === null) {
        prompting = false;
        input = 'you canceled';
      } else if (input.length > 4) {
        prompting = false;
      }
    }

    alert(input);
    ```


*/

let input = '';

let prompting = true;
while (prompting) {
  let input = prompt(
    'enter something longer than 4 characters, or "cancel" to leave',
  );
  if (input === null) {
    prompting = false;
    input = 'you canceled';
  } else if (input > 4) {
    prompting = false;
  }
}

alert(input);
