'use strict';

/* generic

  generic names that describe the variables' roles in the program
  generic names could be used in any program with similar logic or behavior

  _a -> input:
    named because it holds a string of user input to be processed in the program

  _b -> output:
    named because it will hold the final output value of this program
    the output will be created based on the input

  _c -> next:
    the next character in the input string, stepped by the for-of loop

*/

let _a = null;
while (_a === null) {
  _a = prompt(
    'enter some text to frogify.\n' +
      '- "f" will be replaced with "frog"\n' +
      '- "F" will be replaced with "FROG"',
  );
}

let _b = '';

for (const _c of _a) {
  if (_c === 'f') {
    _b = _b + 'frog';
  } else if (_c === 'F') {
    _b = _b + 'FROG';
  } else {
    _b = _b + next;
  }
}

alert(_b);
