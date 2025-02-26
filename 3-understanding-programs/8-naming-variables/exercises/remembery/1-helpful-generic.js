'use strict';

/* generic

  _a -> __:

*/

alert(
  'Remembery, the game of remembering.\n\n' +
    'You will be prompted to enter 3 phrases.\n' +
    'next you will be prompted to remember one of them\n\n' +
    'if you enter it exactly, you win!',
);

let secret1 = prompt('enter your first secret phrase:');
let secret2 = prompt('enter your second secret phrase:');
let secret3 = prompt('enter your third secret phrase:');

alert('all saved! get ready to remember');

let randomNumber = Math.round(Math.random() * 2) + 1;

let answer = '';
if (randomNumber === 1) {
  answer = secret1;
} else if (randomNumber === 2) {
  answer = secret2;
} else if (randomNumber === 3) {
  answer = secret3;
}

let input = prompt('enter phrase number ' + randomNumber);

if (input === answer) {
  alert('correct! phrase ' + randomNumber + ' was "' + answer + '"');
} else {
  alert('nope :(');
}
