'use strict';

/* generic

  _a -> __:

*/

let input = null;
while (input === null) {
  input = prompt('enter something and guess what the program does?');
}

let result = '';
for (let char of input) {
  if ('something'.includes(char)) {
    result = result + char.toUpperCase();
  } else if ('SOMETHING'.includes(char)) {
    result = result + char.toLowerCase();
  } else {
    result = result + char;
  }
}

alert (result);