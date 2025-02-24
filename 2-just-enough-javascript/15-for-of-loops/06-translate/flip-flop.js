'use strict';

/*


  Data In:

  Data Out:

  Test Cases:

*/

/* ---   ?   --- */

// normalPhrase <- null
let normalPhrase = null;
// WHILE: normalPhrase === null
//   normalPhrase <- prompt('enter something to flipflop')
// :END WHILE
while (normalPhrase === null) {
  normalPhrase = prompt('Enter something to flipflop');
}
/* ---   ?   --- */

// previous <- ''
let previous = '';
let flipFlopped = '';
// flipFlopped <- ''

for (let current of normalPhrase) {
  if (previous !== '') {
    flipFlopped = flipFlopped + current + previous;
    previous = '';
  } else {
    previous = current;
  }
}
// FOR: current OF normalPhrase
//   IF: previous !== ''
//     flipFlopped <- flipFlopped + current + previous
//     previous <- ''
//   ELSE:
//     previous <- current
//   :END IF
// :END FOR-OF

/* ---   ?   --- */
if (flipFlopped.length < normalPhrase.length) {
  flipFlopped = flipFlopped + normalPhrase[normalPhrase.length - 1];
}
// IF: flipFlopped.length < normalPhrase.length
//   flipFlopped <- flipFlopped + normalPhrase[normalPhrase.length - 1]
// :END IF

/* ---   ?   --- */

// alert(flipFlopped)
alert(flipFlopped);