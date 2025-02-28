'use strict';

/* Check Word Length

  A user can input a sentence and learn the length of the longest word.
    - given the user cancels:
        they are prompted again
    - given their input has no valid words:
        they are told there are no words
    - given their input has one or more words:
        they are told the length of the longest word

  User Story:
    As a user, I want to input a sentence and find out the length of the longest word,
    so that I can analyze the complexity of my text.

  Acceptance Criteria:
    - The program must prompt the user for input.
    - If the user cancels (null), it must prompt again until a string is provided.
    - It must split the input into words (separated by spaces).
    - It must consider only alphanumeric characters as part of a word.
    - It must display a message with the length of the longest word.
    - If there are no valid words (e.g., only spaces or special characters), it must say "no words".
    - If there are words, it must show the length of the longest one.

  Test Cases:
    contains no valid words:
      ' '        -> 'no words'
      '!!!'      -> 'no words'
      '   '      -> 'no words'
    contains one word:
      'cat'      -> 'longest word length: 3'
      'Hello'    -> 'longest word length: 5'
      '123'      -> 'longest word length: 3'
    contains multiple words:
      'hi there'        -> 'longest word length: 5'
      'dog elephant cat' -> 'longest word length: 8'
      'Big Small Tiny'   -> 'longest word length: 5'
*/

/* --- gather user input --- */
let input = null;
while (input === null) {
  input = prompt('enter a sentence');
}

/* --- process words and find longest --- */
const words = input.split(' ').filter(word => /[a-zA-Z0-9]/.test(word));
let longestLength = 0;
for (const word of words) {
  const wordLength = word.length;
  if (wordLength > longestLength) {
    longestLength = wordLength;
  }
}

/* --- create a message for the user --- */
let message;
if (words.length === 0) {
  message = 'no words';
} else {
  message = 'longest word length: ' + longestLength;
}

/* --- display the message to the user --- */
alert(message);