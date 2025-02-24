import {
  whenFormDataChanges,
  readString,
  displayString,
} from '../../../../../lib/dom-io/index.js';

whenFormDataChanges('input', () => {
  // debugger;
  console.log('--- form data changed ---');

  // --- read the user's input ---
  let readInput = readString('pyramid-bricks');

  // --- build a pyramid ---
  let output = '';
  let pyramidLine = '';

  for (let char of readInput) {
    pyramidLine += char;
    output += pyramidLine + '\n';
  }

  // --- display the pyramid ---
  displayString('out', output);
});
