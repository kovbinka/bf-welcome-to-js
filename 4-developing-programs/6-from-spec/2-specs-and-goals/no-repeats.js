'use strict';

/* No Repeats

  A user can input some text and learn if it has any repeated characters.
    - given the user cancels:
        they are prompted again
    - given their input has at least one repeated character:
        they are told so
    - given their input has at no repeated characters:
        they are told so

  test cases:
    contains no repeated characters:
      ' '           ->   '" " has no repeats'
      'abc'         ->   '"abc" has no repeats'
      'market'      ->   '"market" has no repeats'
      'toad'        ->   '"toad" has no repeats'
    contains 1 repeated character:
      '  '          ->  '"  " has at least one repeat'
      'aa'          ->  '"aa" has at least one repeat'
      'aba'         ->  '"aba" has at least one repeat'
      'abac'        ->  '"abac" has at least one repeat'
      'JavaScript'  ->  '"JavaScript" has at least one repeat'
    contains more than 1 repeated characters:
      '   '         ->  '"   " has at least one repeat'
      'abacada'     ->  '"abacada" has at least one repeat'
      'abcdefggg'   ->  '"abcdefggg" has at least one repeat'
      '.@@..@@.'    ->  '".@@..@@." has at least one repeat'
*/

/* --- gather user input --- */
let input = null;
while (input === null) {
  input = prompt('enter some text');
}

/* --- check if the input has any repeated characters --- */
//  store the search results as a boolean
let hasRepeats = false;
let seenChars = '';
for (const char of input) {
  if (seenChars.includes(char)) {
    hasRepeats = true;
    break; // Exit loop once a repeat is found
  }
  seenChars = seenChars + char;
}

/* --- create a message for the user --- */
let message;
if (hasRepeats) {
  message = '"' + input + '" has at least one repeat';
} else {
  message = '"' + input + '" has no repeats';
}

/* --- display the message to the user --- */
alert(message);