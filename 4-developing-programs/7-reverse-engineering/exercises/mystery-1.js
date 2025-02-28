'use strict';

/* Count Vowels

  A user can input some text and learn how many vowels (a, e, i, o, u) it contains.
    - given the user cancels:
        they are prompted again
    - given their input has no vowels:
        they are told there are no vowels
    - given their input has one or more vowels:
        they are told the number of vowels

  User Story:
    As a user, I want to input text and find out how many vowels it has,
    so that I can analyze the composition of my text.

  Acceptance Criteria:
    - The program must prompt the user for input.
    - If the user cancels (null), it must prompt again until a string is provided.
    - It must count only lowercase and uppercase 'a', 'e', 'i', 'o', 'u'.
    - It must display a message with the count of vowels.
    - If there are no vowels, it must say "no vowels".
    - If there are vowels, it must show the exact number.

  Test Cases:
    contains no vowels:
      ' '        -> 'no vowels'
      'sky'      -> 'no vowels'
      'myth'     -> 'no vowels'
    contains 1 vowel:
      'a'        -> '1 vowel'
      'cat'      -> '1 vowel'
      'Sky'      -> '1 vowel'
    contains more than 1 vowel:
      'ae'       -> '2 vowels'
      'hello'    -> '2 vowels'
      'Audio'    -> '3 vowels'
      'BEAUTIFUL' -> '5 vowels'
*/

/* --- gather user input --- */
let input = null;
while (input === null) {
  input = prompt('enter some text');
}

/* --- count vowels --- */
let vowelCount = 0;
const vowels = 'aeiouAEIOU';
for (const char of input) {
  if (vowels.includes(char)) {
    vowelCount++;
  }
}

/* --- create a message for the user --- */
let message;
if (vowelCount === 0) {
  message = 'no vowels';
} else if (vowelCount === 1) {
  message = '1 vowel';
} else {
  message = vowelCount + ' vowels';
}

/* --- display the message to the user --- */
alert(message);