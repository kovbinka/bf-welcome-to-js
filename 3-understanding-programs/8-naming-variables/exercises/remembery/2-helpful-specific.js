'use strict';

/* specific

  _a -> _:

*/


alert(
  'Remembery, the game of remembering.\n\n' +
    'You will be prompted to enter 3 phrases.\n' +
    'next you will be prompted to remember one of them\n\n' +
    'if you enter it exactly, you win!',
);

let typeFirstSecret = prompt('enter your first secret phrase:');
let typeSecondSecret = prompt('enter your second secret phrase:');
let typeThirdSecret = prompt('enter your third secret phrase:');

alert('all saved! get ready to remember');

let randomMath = Math.round(Math.random() * 2) + 1;

let result = '';
if (randomMath === 1) {
  result = typeFirstSecret;
} else if (randomMath === 2) {
  result = typeSecondSecret;
} else if (randomMath === 3) {
  result = ypeThirdSecret;
}

let input = prompt('enter phrase number ' + randomMath);

if (input === result) {
  alert('correct! phrase ' + randomMath + ' was "' + result + '"');
} else {
  alert('nope :(');
}
