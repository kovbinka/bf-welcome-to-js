'use strict';

/*
  _a:
    declaration:
      init:
      types:
      scopes:
    reads:
      scopes:
      checks:
    assignments:
      types:
      scopes:


*/

alert('you will need to enter strings with "e" in the right place');

let alone = 0;

let ball = 'entries:';

while (true) {
  let cross = prompt('input a string with "e" at index ' + alone);

  if (cross === null) {
    let during = confirm('are you sure you want to cancel?');
    if (during) {
      break;
    } else {
      continue;
    }
  }

  if (cross[alone] !== 'e') {
    ball = ball + '\nx. "' + cross + '"';
    break;
  }

  ball = ball + '\n' + alone + '. "' + cross + '"';
  alone = alone + 1;
}

alert('your score: ' + alone + '\n\n' + ball);
