'use strict';

/* generic

  _a -> __:

*/

let input = null;
while (input === null) {
  input = prompt('enter something with no duplicate characters');
}

let output = '';
for (let char of input) {
  let duplicate = output.includes(char);
  if (duplicate) {
    break;
  }
  output = output + char;
}

if (output.length === input.length) {
  alert('well done!');
} else {
  alert('too bad, try again');
}