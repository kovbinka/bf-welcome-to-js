'use strict';

/*
  refactor this program so the I/O loop DOES NOT accept strings with duplicate characters
  hints:
    - one strategy is moving the `for-of` loop inside the I/O loop
    - you might want to try using a boolean flag for the I/O loop (or true/break/continue)

*/

let mayHaveDuplicates = null;
let isValid = false;

while (!isValid) {
  mayHaveDuplicates = prompt('enter something with no duplicate characters');

  if (mayHaveDuplicates === null) {
    alert('there is no escape');
    continue; // keep asking if user cancels
  }

  let hasNoDuplicates = '';
  for (let char of mayHaveDuplicates) {
    let isDuplicate = hasNoDuplicates.includes(char);
    if (isDuplicate) {
      alert('too bad, try again - duplicates found');
      hasNoDuplicates = ''; // reset for next attempt
      break;
    }
    hasNoDuplicates = hasNoDuplicates + char;
  }

  if (hasNoDuplicates.length === mayHaveDuplicates.length) {
    isValid = true; // exit loop only if no duplicates
  }
}

alert('well done!');