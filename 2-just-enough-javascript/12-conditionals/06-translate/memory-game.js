// #todo

'use strict';

/*


  Data In:

  Data Out:

  Test Cases:

*/

/* ---   ?   --- */

// thingToRemember <- prompt('enter some text, then remember it.\n\n' + 'if you remember it correctly you win')

let thingToRemember = prompt(
  'enter some text, then remember it.\n\n' +
    'if you remember it correctly you win',
);

if (thingToRemember !== null) {
  let guess = prompt('now try to remember what it was:');
  if (guess !== null) {
    if (guess === thingToRemember) {
      alert('you win!');
    } else {
      alert('try again later');
    }
  }
}

alert('good bye');
// IF: thingToRemember !== null
/* ---   ?   --- */
//   guess <- prompt('now try to remember what it was:')
//   IF: guess !== null
//     IF: guess === thingToRemember
/* ---   ?   --- */
//       alert('you win!')
//     ELSE:
/* ---   ?   --- */
//       alert('try again.')
//     :END IF
//   :END IF
// :END IF

/* ---   ?   --- */

// alert('good bye')
