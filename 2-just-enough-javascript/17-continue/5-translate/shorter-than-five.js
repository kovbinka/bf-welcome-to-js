'use strict';

/*


  Data In:

  Data Out:

  Test Cases:

*/

/* ---   ?   --- */

// input <- ''
let input = '';

while (true) {
  input = prompt('enter something shorter than 5 characters');

  if (input === null) {
    alert('there is no escape');
    continue;
  }
  if (input.length > 4) {
    alert('your input is too long');
    continue;
  }
  break;
}

alert(input);
// WHILE: true
//   input <- prompt('enter something shorter than 5 characters')
/* ---   ?   --- */
//   IF: input === null
//     alert('there is no escape')
//     CONTINUE
//   :END IF
/* ---   ?   --- */
//   IF: input.length > 4
//     alert('your input is too long')
//     CONTINUE
//   :END IF
/* ---   ?   --- */
//   BREAK
// :END WHILE

/* ---   ?   --- */

// alert(input)
