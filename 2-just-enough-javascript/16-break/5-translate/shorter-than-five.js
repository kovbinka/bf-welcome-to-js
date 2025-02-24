'use strict';

/*


  Data In:

  Data Out:

  Test Cases:

*/

/* ---   ?   --- */

// input <- ''

// WHILE: true
//   input <- prompt('enter something shorter than 5 characters')
//   IF: input === null
//     alert('there is no escape')
//   ELSE: IF: input.length > 4
//     alert('your input is too long')
//   ELSE:
//     BREAK
//   :END IF
// :END WHILE
let input = '';

while (true) {
  input = prompt('enter something shorter than 5 characters');

  if (input === null) {
    alert('there is no escape');
  } else if (input.length > 4) {
    alert('your input is too long');
  } else {
    break;
  }
}

alert(input);
/* ---   ?   --- */

// alert(input)
