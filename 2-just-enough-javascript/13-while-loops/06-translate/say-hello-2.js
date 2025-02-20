'use strict';

/*


  Data In:

  Data Out:

  Test Cases:

*/

/* ---   ?   --- */
let input = null;

while (input === null){
 input = prompt('say hello');
}

// input <- null
// WHILE: input === null
//   input <- prompt('say hello')
// :END WHILE

/* ---   ?   --- */
let message = '';
if (input === 'hello'){
  message = 'hello you too!';
} else {
  message = 'good bye';
}

alert(message);

// message <- ''
// IF: input === 'hello'
//   message <- 'hello to you too!'
// ELSE:
//   message <- 'good bye'
// :END IF

/* ---   ?   --- */

// alert(message)
