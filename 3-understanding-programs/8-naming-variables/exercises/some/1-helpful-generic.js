'use strict';

/* generic

  _a -> __:

*/

let typeText = null;
while (typeText === null) {
  typeText = prompt(
    'enter some text, the program will check if it contains any vowels',
  );
}

let finishResult = 'aeiou';

let isIncludet = false;
for (let char of typeText) {
  let newChar = char.toLowerCase();
  if (finishResult.includes(newChar)) {
    isIncludet = true;
    break;
  }
}

alert(isIncludet);
