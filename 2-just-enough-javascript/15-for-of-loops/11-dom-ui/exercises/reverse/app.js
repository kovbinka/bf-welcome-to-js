import {
  whenFormDataChanges,
  readString,
  displayString,
} from '../../../../../lib/dom-io/index.js';

whenFormDataChanges('input', () => {
  // debugger;
  console.log('--- form data changed ---');

  // --- read the user's input ---

  let text = readString('to-reverse');

  let output = '';

  // --- reverse this ---

  for (let char of text) {
    output = char + output;
  }

  // --- display the result ---

  displayString('output', output);
});