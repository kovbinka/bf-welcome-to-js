'use strict';

/* is excited

  a user can enter any input and learn if it is excited or not
  - given the user cancels, the i/o loop continues
  - given the user inputs something with an "!", their input is excited
  - given their input does not have "!", it is not excited

  test cases:
    '' -> '"" is not excited'
    'hello' -> '"hello" is not excited'
    '!' -> '"!" is excited'
    '!yo' -> '"!yo"" is excited'
    '!yo!' -> '"!yo!" is excited'

--- experiments ---

  1. FAILING: 'hello world'
      EXPECT: '"hello world" is not excited'
      ACTUAL: '"hello world" is excited'

    TRY: Fix the variable `isExcited` logic to properly detect spaces instead of exclamation marks.
    PREDICT: The code will correctly detect if the input contains any spaces.
    IT DID: The program incorrectly checked for exclamation marks ('!') instead of spaces (' ').
    EXPLAIN: The code was intended to check for spaces but mistakenly used '!' in the condition.
             The variable name `isExcited` also caused confusion about the goal of the program.

--- lessons learned ---

    - Always align variable names and conditions with the intended program behavior.
    - The code should check for spaces (' ') instead of '!' to match the prompt's requirement.
    - The correct logic should be:
        ```js
        let hasSpaces = false;
        for (const char of input) {
          if (char === ' ') {
            hasSpaces = true;
            break;
          }
        }

        if (hasSpaces) {
          alert('"' + input + '" has spaces');
        } else {
          alert('"' + input + '" has no spaces');
        }
        ```

*/

let input = null;
while (input === null) {
  input = prompt(
    'enter some text, the program will check if it has any spaces',
  );
}

let isExcited = false;
for (const char of input) {
  if (char !== '!') {
    isExcited = true;
    break;
  }
}

if (isExcited) {
  alert('"' + input + '" is excited');
} else {
  alert('"' + input + '" is not excited');
}
