'use strict';

/* specific

  _a -> _:

*/

let input = null;
while (input === null) {
  input = prompt(
    'enter some text, the program will check if it contains any vowels',
  );
}

let finishResult = 'aeiou';

let isIncludet = false;
for (let char of input) {
  let newChar = char.toLowerCase();
  if (finishResult.includes(newChar)) {
    isIncludet = true;
    break;
  }
}

alert(isIncludet);