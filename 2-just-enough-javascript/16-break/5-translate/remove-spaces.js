// #todo

'use strict';

/*


  Data In:

  Data Out:

  Test Cases:

*/

/* ---   ?   --- */

// input <- null

// WHILE: true
//   input <- prompt('enter something with at least one space, the spaces will be removed')
//   IF: input === null
//     alert('no escape')
//   ELSE: IF: input === ''
//     alert('gotta enter something')
//   ELSE: IF: !input.includes(' ')
//     alert('there must be a space!')
//   ELSE:
//     BREAK
//   :END IF
// :END WHILE
let input = null;

while (true) {
  input = prompt(
    'enter something with at least one space, the spaces will be removed',
  );
  if (input === null) {
    alert('no escape');
  } else if (input === '') {
    alert('gotta enter something');
  } else if (!input.includes(' ')) {
    alert('there must be a space!');
  } else {
    break;
  }
}

let spaceless = '';

for (let char of input) {
  if (char !== ' ') {
    spaceless = spaceless + char;
  }
}

alert(input + ' -> ' + spaceless);
/* ---   ?   --- */

// spaceless <- ''

// FOR: char OF input
//   IF: char !== ' '
//     spaceless <- spaceless + char
//   :END IF
// :END FOR-OF

/* ---   ?   --- */

// alert(input + ' -> ' + spaceless)
