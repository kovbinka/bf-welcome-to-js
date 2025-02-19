'use strict';

/*

  Data In:

  Data Out:

  Test Cases:

*/

/* ---   ?   --- */

// input <- prompt('do whatever you want')
let input = prompt('do whatever you want');

/* ---   ?   --- */

// message <- 'your input is '
let message = 'your input is ';

// IF: input === null
if (input === null) {
  message += 'null';
} else {
  let maybeNot = '';
  if (input.length !== 0) {
    maybeNot = 'not ';
  }
  message = message + maybeNot + 'empty';
}

alert(message);
/* ---   ?   --- */
//   message <- message + 'null'
// ELSE:
/* ---   ?   --- */
//   maybeNot <- ''
//   IF: input.length !== 0
/* ---   ?   --- */
//     maybeNot <- 'not '
//   :END IF
//   message <- message + maybeNot + 'empty'
// :END IF

/* ---   ?   --- */

// alert(message)
