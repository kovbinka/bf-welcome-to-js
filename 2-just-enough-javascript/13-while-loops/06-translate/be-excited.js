'use strict';

/* Be Excited


  Data In:

  Data Out:

  Test Cases:

*/

/* ---  ?  --- */
let input = null;

while (input === null) {
  input = prompt('enter something, it will become excited');
}
// input <- null
// WHILE: input === null
//   input <- prompt('enter something, it will become excited')
// :END WHILE

/* ---  ?  --- */

let output = input;
if (input[input.lenght - 1] !== '!') {
  output = output + '!';
}
// output <- input
// IF: input[input.length - 1] !== '!'
//   output <- output + '!'
// :END IF

/* ---  ?  --- */
alert(output);
// alert(output)
