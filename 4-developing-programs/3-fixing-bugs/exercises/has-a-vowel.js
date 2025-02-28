'use strict';

/* has a vowel

  a user can enter text and learn if it contains at least one vowel
  - given the user cancels, they are prompted again
  - given their input has no vowels, they are told it has none
  - given their input has at least one vowel, they are told so

  test cases:
    '' -> '"" has no vowels'
    'xyz' -> '"xyz" has no vowels'
    '!.-.!' -> '"!.-.!" has no vowels'
    'aeiou' -> '"aeiou" has at least one vowel'
    'hi' -> '"hi" has at least one vowel'

--- experiments ---

  1. FAILING: 'hello'
      EXPECT: '"hello" has at least one vowel'
      ACTUAL: '"hello" has no vowels'

    TRY: Fix the `hasAVowel` variable logic.
    PREDICT: The message will correctly indicate when the input has vowels.
    IT DID: The alert displayed the wrong message because `hasAVowel` was set to `false` when a vowel was found.
    EXPLAIN: The initial value of `hasAVowel` was set to `true`, but it should be `false` initially.
             When a vowel is found, `hasAVowel` should become `true`, not `false`.

--- lessons learned ---

    - Properly initialize boolean variables based on the intended logic.
    - Be mindful of how variables are updated inside loops.
    - The correct logic should be:
        ```js
        let hasAVowel = false;
        for (const char of characters) {
          if (vowels.includes(char)) {
            hasAVowel = true;
            break;
          }
        }
        ```


*/

let characters = null;
while (characters === null) {
  characters = prompt('enter some characters');
}

const vowels = 'aeiouAEIOU';

let hasAVowel = true;
for (const char of characters) {
  if (vowels.includes(char)) {
    hasAVowel = false;
    break;
  }
}

if (hasAVowel) {
  alert('"' + characters + '" has at least one vowel');
} else {
  alert('"' + characters + '" has no vowels');
}
