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

alert(
  'this is a two-player game:\n\n' +
    '- player 1: enters an animal\n' +
    '- player 2: says something cool about it',
);

let input = null;
while (input === null) {
  input = prompt('enter an animal');
}

let result = '';

let isWorking = false;
while (isWorking) {
  result = prompt('tell me something about ' + input);

  if (result === '' || result === null) {
    alert('that is not something');
  } else if (result.toLowerCase().includes(input.toLowerCase())) {
    isWorking = true;
  } else {
    alert('nope, not about ' + input + '.  try again.');
  }
}

alert('i just learned something cool about ' + input + '!\n\n- "' + result + '"');
