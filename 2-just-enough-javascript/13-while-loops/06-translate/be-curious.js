'use strict';

/* Be Curious


  Data In:

  Data Out:

  Test Cases:

*/

/* ---  ?  --- */
let input = null;

while (input === null) {
  prompt('enter something, it will become curious');
}
// input <- null
// WHILE: input === null
//   input <- prompt('enter something, it will become curious')
// :END WHILE

/* ---  ?  --- */
let output = input;
if (input[input.length - 1] !== '?') {
  output = output + '?';
}

alert(output);
// output <- input
// IF: input[input.length - 1] !== '?'
//   output <- output + '?'
// :END IF

/* ---  ?  --- */

// alert(output)
