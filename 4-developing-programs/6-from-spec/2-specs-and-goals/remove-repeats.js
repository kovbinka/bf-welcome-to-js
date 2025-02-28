'use strict';

/* Remove Repeats

  A user can input some text and have all repeated characters removed.
    - given the user cancels:
        they are prompted again
    - given their input has at least one repeated character:
        the repeats are removed and a before/after is displayed
    - given their input has at no repeated characters:
        nothing is changed and he initial input is displayed

    test cases:
    contains no repeated characters:
      ' '           ->   ' '
      'abc'         ->   'abc'
      'market'      ->   'market'
      'toad'        ->   'toad'
    contains 1 repeated character:
      '  '          ->  '"  " -> " "'
      'aa'          ->  '"aa" -> "a"'
      'aba'         ->  '"aba" -> "ab"'
      'abac'        ->  '"abac" -> "abc"'
      'JavaScript'  ->  '"JavaScript" -> "JavScript"'
    contains more than 1 repeated characters:
      '   '         ->  '"   " -> " "'
      'abacada'     ->  '"abacada" -> "abcd"'
      'abcdefggg'   ->  '"abcdefggg" -> "abcdefg"'
      '.@@..@@.'    ->  '".@@..@@." -> ".@"'
*/

/* --- gather user input --- */
let input = null;
while (input === null) {
  input = prompt('enter some text');
}

/* --- check if the input has any repeated characters --- */
//  store the string with no repeats for later
let noRepeats = '';
for (const char of input) {
  if (!noRepeats.includes(char)) {
    noRepeats = noRepeats + char;
  }
}

/* --- create a message for the user --- */
//  you can compare the input to the string without repeats
let message;
if (input.length === noRepeats.length) {
  message = noRepeats; // No repeats, show original input
} else {
  message = '"' + input + '" -> "' + noRepeats + '"'; // Show before/after
}

/* --- display the message to the user --- */
alert(message);