'use strict';

let message = '';

while (true) {
  let input = prompt('enter something that includes "ear"');

  if (input === null) {
    alert('there is no escape');
  } else if (input.includes('ear')) {
    message = '"' + input + '" includes "ear"';
    break;
  }
}

alert(message);
