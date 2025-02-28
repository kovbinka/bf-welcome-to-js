'use strict';

/* Count Consonants

  A user can input some text and learn how many consonants it contains (excluding vowels and non-letters).
    - given the user cancels:
        they are prompted again
    - given their input has no consonants:
        they are told there are no consonants
    - given their input has one or more consonants:
        they are told the number of consonants

  User Story:
    As a user, I want to input text and find out how many consonants it has,
    so that I can understand the structure of my text.

  Acceptance Criteria:
    - The program must prompt the user for input.
    - If the user cancels (null), it must prompt again until a string is provided.
    - It must count only consonants (letters that are not 'a', 'e', 'i', 'o', 'u', case-insensitive).
    - It must ignore spaces, numbers, and special characters.
    - It must display a message with the count of consonants.
    - If there are no consonants, it must say "no consonants".
    - If there are consonants, it must show the exact number.

  Test Cases:
    contains no consonants:
      ' '        -> 'no consonants'
      'aeiou'    -> 'no consonants'
      '123'      -> 'no consonants'
    contains 1 consonant:
      'b'        -> '1 consonant'
      'cat'      -> '2 consonants'
      'Sky'      -> '2 consonants'
    contains more than 1 consonant:
      'myth'     -> '4 consonants'
      'hello'    -> '3 consonants'
      'Strength' -> '7 consonants'
*/

/* --- gather user input --- */
let input = null;
while (input === null) {
  input = prompt('enter some text');
}

/* --- count consonants --- */
let consonantCount = 0;
const vowels = 'aeiouAEIOU';
for (const char of input) {
  if (/[a-zA-Z]/.test(char) && !vowels.includes(char)) {
    consonantCount++;
  }
}

/* --- create a message for the user --- */
let message;
if (consonantCount === 0) {
  message = 'no consonants';
} else if (consonantCount === 1) {
  message = '1 consonant';
} else {
  message = consonantCount + ' consonants';
}

/* --- display the message to the user --- */
alert(message);