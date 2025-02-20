'use strict';

/*


  Data In:

  Data Out:

  Test Cases:

*/

/* ---   ?   --- */

// input <- null
let input = null;

while (input === null) {
  input = prompt('input something');
}

// WHILE: input === null
//   input <- prompt('enter something')
// :END WHILE

/* ---   ?   --- */

// output <- ''
let output = '';
if (input === '') {
  output = 'you entered nothing :(';
} else {
  output = 'thank you for something';
}

alert(output);

// IF: input === ''
//   output <- 'you entered nothing :('
// ELSE:
//   output <- 'thank you for something!'
// :END IF

/* ---   ?   --- */

// alert(output)
