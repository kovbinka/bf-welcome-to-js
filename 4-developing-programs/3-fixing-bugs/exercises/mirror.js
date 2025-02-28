'use strict';

/* mirror

  a user can enter text and have it reflected my a mirror
  - given the user cancels, they are prompted again
  - given the user inputs anything, their input is reflected

  test cases:
    '' -> '|'
    'a' -> 'a|a'
    'hello' -> 'olleh|hello'
    ':)' -> '):|:)'

  --- experiments ---

--- experiments ---

  1. FAILING: 'abc'
      EXPECT: '|cba|'
      ACTUAL: '|a|b|c|a|b|c|a|b|c|'

    TRY: Fix the logic of how mirrored text is constructed.
    PREDICT: The mirrored text will correctly show the input reversed with '|' on both sides.
    IT DID: The alert showed a repetitive pattern instead of a mirrored result.
    EXPLAIN: The code concatenates the mirrored string recursively inside the loop,
             causing it to grow exponentially instead of correctly appending characters in reverse order.

--- lessons learned ---

    - The mirrored string should be constructed by prepending characters to the left 
      and appending them to the right of the initial '|'.
    - Instead of `mirrored = mirrored + character + mirrored`, the correct approach is:
        ```js
        mirrored = character + mirrored + character;
        ```
    - However, to achieve the expected mirrored effect, we need to prepend characters
      to the left side only while keeping the right side static:

    Corrected code:

    ```js
    let text = null;
    while (text === null) {
      text = prompt('enter some text, it will be mirrored');
    }

    let mirrored = '|';
    for (const character of text) {
      mirrored = character + mirrored;
    }

    alert(mirrored);
    ```

    Example:
    - Input: 'abc'
    - Output: '|cba'

*/

let text = null;
while (text === null) {
  text = prompt('enter some text, it will be mirrored');
}

let mirrored = '|';
for (const character of text) {
  mirrored = mirrored + character + mirrored;
}

alert(mirrored);
