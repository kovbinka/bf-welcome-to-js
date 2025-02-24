import {
  whenFormDataChanges,
  readString,
  readNumber,
  displayString,
} from '../../../../../lib/dom-io/index.js';

whenFormDataChanges('skippable', () => {
  // debugger;
  console.log('--- form data changed ---');

  // --- read the user's input ---

  let skip = readNumber('skip-size');

  let phrase = readString('phrase');

  let output = '';

  let i = 0;

  // --- skip characters ---

  for (let char of phrase) {
    if (i % skip !== 0) {
      output += char;
    }
    i++;
  }

  // --- display the result ---

  displayString('skipped', output);
});