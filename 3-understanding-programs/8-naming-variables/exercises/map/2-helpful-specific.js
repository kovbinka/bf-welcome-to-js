'use strict';

/* specific

  _a -> _:

*/

let typeSomething = null;
while (typeSomething === null) {
  typeSomething = prompt('enter something and guess what the program does?');
}

let alerting = '';
for (let letter of typeSomething) {
  if ('something'.includes(letter)) {
    alerting = alerting + letter.toUpperCase();
  } else if ('SOMETHING'.includes(letter)) {
    alerting = alerting + letter.toLowerCase();
  } else {
    alerting = alerting + letter;
  }
}

alert (alerting);
