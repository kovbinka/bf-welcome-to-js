'use strict';

/*


  Data In: enter something with at least one space, the spaces will be removed

  Data Out: removed all spaces

  Test Cases: 'q w e r t y  -> qwerty'

*/

/* ---   ?   --- */

// input <- null

// WHILE: true
//   input <- prompt('enter something with at least one space, the spaces will be removed')
//   IF: input === null
//     alert('no escape')
//     CONTINUE
//   :END IF
//   IF: input === ''
//     alert('gotta enter something')
//     CONTINUE
//   :END IF
//   IF: !input.includes(' ')
//     alert('there must be a space!')
//     CONTINUE
//   :END IF
//   BREAK
// :END WHILE

/* ---   ?   --- */

// spaceless <- ''

// FOR: char OF input
//   IF: char !== ' '
//     spaceless <- spaceless + char
//   :END IF
// :END FOR-OF

/* ---   ?   --- */

// alert(input + ' -> ' + spaceless)

let input = null;

while (true) {
  input = prompt(
    'enter something with at least one space, the spaces will be removed',
  );
  if (input === null) {
    alert('no escape');
    continue;
  }

  if (input === '') {
    alert('gotta enter something');
    continue;
  }

  if (!input.includes(' ')) {
    alert('there must be a space!');
    continue;
  }

  break;
}

let spaceless = '';

for (let char of input) {
  if (char !== ' ') {
    spaceless = spaceless + char;
  }
}

/* ---   ?   --- */

alert(input + ' -> ' + spaceless);