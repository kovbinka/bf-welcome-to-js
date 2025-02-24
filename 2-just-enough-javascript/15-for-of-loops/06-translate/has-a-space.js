'use strict';

/*


  Data In:

  Data Out:

  Test Cases:

*/

/* ---   ?   --- */

// input <- null
let input = null;
// WHILE: input === null
//   input <- prompt('enter some text, the program will check if it has any spaces')
// :END WHILE
while (input === null) {
  input = prompt('Enter some text, the program will check if it has any spaces');
}
/* ---   ?   --- */

// hasASpace <- false
let hasASpace = false;

for (let char of input) {
  if (char === ' ') {
    hasASpace = true;
  }
}
// FOR: char OF input
//   IF: char === ' '
//     hasASpace <- true
//   :END IF
// :END FOR-OF

/* ---   ?   --- */

// message <- ''
let message = '';

if (hasASpace) {
  message = '"' + input + '" has at least one space';
} else {
  message = '"' + input + '" does not have any spaces';
}
// IF: hasASpace
//   message <- '"' + input + '" has at least one space'
// ELSE:
//   message <- '"' + input + '" does not have any spaces'
// :END IF

/* ---   ?   --- */
alert(message);
// alert(message)
