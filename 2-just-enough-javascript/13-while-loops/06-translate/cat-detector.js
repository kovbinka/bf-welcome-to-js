'use strict';

/* Cat Detector


  Data In:

  Data Out:

  Test Cases:


*/

/* --- ? --- */

// input <- null
let input = null;

while (input === null) {
 input = prompt('please enter "cat"');
}
// WHILE: input === null
//   input <- prompt('please enter "cat"')
// :END WHILE

/* --- ? --- */

// message <- ''
let message = '';

if (input !== 'cat') {
  message = ('"' + input + '" is not a cat');
} else {
  message = ('thank you for the cat')
}

alert(message);
// IF: input !== 'cat'
//   message <- '"' + input + '" is not a cat'
// ELSE:
//   message <- 'thank you for the cat'
// :END IF

/* --- ? --- */

// alert(message)
