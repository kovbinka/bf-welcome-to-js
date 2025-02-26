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

let ball = 0;

let foot = 'entries:';

let hand = true;
while (hand) {
  let handOne = prompt('_d a string with "e" at index ' + _a);

  if (handOne === null) {
    hand = !confirm('are you sure you want to exit?');
  } else if (_d[_a] === 'e') {
    foot = _b + '\n' + _a + '. "' + _d + '"';
    ball = _a + 1;
  } else {
    foot = _b + '\nx. "' + _d + '"';
    hand = false;
  }
}

alert('your score: ' + ball + '\n\n' + foot);
