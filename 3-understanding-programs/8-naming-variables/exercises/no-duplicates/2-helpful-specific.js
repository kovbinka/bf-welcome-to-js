'use strict';

/* specific

  _a -> _:

*/


let letType = null;
while (letType === null) {
  letType = prompt('enter something with no duplicate characters');
}

let whatIsResult = '';
for (let letter of letType) {
  let duplicate = whatIsResult.includes(letter);
  if (duplicate) {
    break;
  }
  whatIsResult = whatIsResult + letter;
}

if (whatIsResult.length === letType.length) {
  alert('well done!');
} else {
  alert('too bad, try again');
}