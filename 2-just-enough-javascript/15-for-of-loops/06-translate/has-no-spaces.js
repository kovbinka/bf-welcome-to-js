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

let noSpaces = true;
/* ---   ?   --- */

// noSpaces <- true
let noSpaces = true;

for (let letter of input) {
  if (letter === ' ') {
    noSpaces = false;
  }
}
// FOR: letter OF input
//   IF: letter === ' '
//     noSpaces <- false
//   :END IF
// :END FOR-OF

/* ---   ?   --- */

// message <- ''
let message = '';

if (noSpaces) {
  message = '"' + input + '" has no spaces';
} else {
  message = '"' + input + '" has at least one space';
}
// IF: noSpaces
//   message <- '"' + input + '" has no spaces'
// ELSE:
//   message <- '"' + input + '" has at least one space'
// :END IF

/* ---   ?   --- */
alert(message);
// alert(message)
