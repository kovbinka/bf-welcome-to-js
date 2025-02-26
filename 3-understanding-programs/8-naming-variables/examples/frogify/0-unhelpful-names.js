'use strict';

/*

  _a: stores the user input, important for control flow
    declaration:
      init: yes
      types: object (null)
      scopes: global
    reads: 2
      scopes: global
      checks: while, for-of
    assignments: 1
      types: object (null), string
      scopes: while

  _b: stores the frogified string as it's built
    declaration:
      init: yes
      types: string
      scopes: for-of
    reads: 4
      scopes: conditions inside for-of
    assignments: 3
      types: string
      scopes: for-of

  _c: declaration once per character in _a
    declaration:
      init: yes
      types: string
      scopes: for-of loop
    reads: 3
      scopes: conditions inside for-of
      checks: both conditions inside for-of
    assignments: 0

*/

// _a: declare, null
let userInput = null;
// _a: read
while (userInput === null) {
  // _a: write, string or null
  userInput = prompt(
    'enter some text to frogify.\n' +
      '- "f" will be replaced with "frog"\n' +
      '- "F" will be replaced with "FROG"',
  );
}

// _b: declare, string
let result = '';

// _c: declare, string
// _a: read
for (let character of userInput) {
  // _c: read
  if (character === 'f') {
    // _b: read
    // _b: write, string
    result = result + 'frog';
  }
  // _c: read
  else if (character === 'F') {
    // _b: read
    // _b: write, string
    result = result + 'FROG';
  } else {
    // _c: read
    // _b: read
    // _b: write, string
    result = result + character;
  }
}

// _b: read
alert(result);
