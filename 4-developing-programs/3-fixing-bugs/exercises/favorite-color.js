'use strict';

/* favorite color

  a user must input something
  - given they cancel, the loop continues
  - given they input an empty string, the loop continues
  - all other input is allowed

  test cases:
    ' ' -> 'you entered " "'
    'hi' -> 'you entered "hi"'
    'JavaScript' -> 'you entered "JavaScript"'

--- experiments ---

  1. FAILING: cancel input (null)
      EXPECT: 'you entered "null"'
      ACTUAL: TypeError: Cannot read properties of null (reading 'length')

    TRY: Separate the null check from the length check.
    PREDICT: The code will correctly handle the "cancel" action without an error.
    IT DID: The code still threw an error because it tried to access `input.length` on `null`.
    EXPLAIN: When `input` is `null`, checking `input.length` results in a TypeError.
             The logical AND (`&&`) does not prevent the second condition from being evaluated
             if the first condition is `false` in this scenario.

--- lessons learned ---

    - When working with `null`, always check for `null` before accessing properties.
    - Avoid combining property access (`input.length`) with potential `null` values in a single condition.
    - The correct approach is to use:
        `if (input === null || input.length === 0)` 
      instead of:
        `if (input === null && input.length === 0)`



*/

let message = 'you entered "';

while (true) {
  const input = prompt('enter something');

  if (input === null && input.length === 0) {
    message = input + '"';
    break;
  }
}

alert(message);
