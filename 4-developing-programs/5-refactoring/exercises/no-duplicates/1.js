'use strict';

/*
  refactor this program so the final message is stored in a separate variable
  alert the final message after the conditional statement
*/

let mayHaveDuplicates = null;
while (mayHaveDuplicates === null) {
  mayHaveDuplicates = prompt('enter something with no duplicate characters');
}

let hasNoDuplicates = '';
for (let char of mayHaveDuplicates) {
  let isDuplicate = hasNoDuplicates.includes(char);
  if (isDuplicate) {
    break;
  }
  hasNoDuplicates = hasNoDuplicates + char;
}

let finalMessage;
if (hasNoDuplicates.length === mayHaveDuplicates.length) {
  finalMessage = 'Well done';
} else {
  finalMessage = 'Too bad, try again';
}

alert(finalMessage);