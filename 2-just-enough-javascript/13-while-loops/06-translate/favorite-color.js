'use strict';

/*


  Data In:

  Data Out:

  Test Cases:

*/

/* ---   ?   --- */

// message <- 'your favorite color is '
let message = 'your favorite color is ';
let unconfirmed = true;

while (unconfirmed) {
  let input = prompt('what is your favorite color?');

  if (input === null) {
    alert('there is no escape');
  } else {
    let confirmed = confirm('is this correct? "' + input + '"');
    if (confirmed === true) {
      message = message + input;
      unconfirmed = false;
    }
  }
}

alert(message);

// WHILE: unconfirmed
//   input <- prompt('what is your favorite color?')
//   IF: input === null
//     alert('there is no escape')
//   ELSE:
/* ---   ?   --- */
//     confirmed <- confirm('is this correct? "' + input + '"')
//     IF: confirmed === true
//       message <- message + input
//       unconfirmed <- false
//     :END IF
//   :END IF
// :END WHILE

/* ---   ?   --- */

// alert(message)
