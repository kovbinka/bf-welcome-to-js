'use strict';

/*


  Data In: enter something with at least one space, the spaces will be removed

  Data Out: removes all spases

  Test Cases: 'q w e r t y -> qwerty'

*/

/* ---   ?   --- */

// input <- null

// hasSpaces <- false

// WHILE: !hasSpaces
//   input <- prompt('enter something with at least one space, the spaces will be removed')
//   IF: input === null
//     alert('no escape')
//   ELSE: IF: input === ''
//     alert('gotta enter something')
//   ELSE: IF: !input.includes(' ')
//     alert('there must be a space!')
//   ELSE:
//     hasSpaces <- true
//   :END IF
// :END WHILE

/* ---   ?   --- */

// spaceless <- ''

// FOR: character OF input
//   IF: character === ' '
//     CONTINUE
//   :END IF
//   spaceless <- spaceless + character
// :END FOR-OF

/* ---   ?   --- */

// alert(input + ' -> ' + spaceless)

let input = null;

let hasSpaces = false;

while (!hasSpaces) {
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
    hasSpaces = true;
  }
}

let spaceless = '';

for (let character of input) {
  if (character === ' ') {
    continue;
  }
  spaceless = spaceless + character;
}

alert(input + ' -> ' + spaceless);
