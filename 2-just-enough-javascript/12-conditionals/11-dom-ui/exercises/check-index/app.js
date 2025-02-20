import {
  whenFormDataChanges,
  readString,
  readNumber,
  displayString,
} from '../../../../../lib/dom-io/index.js';

whenFormDataChanges('search-input', () => {
  // debugger;
  console.log('--- form data changed ---');

  // --- check the index ---
  const textValue = readString('text');
  const characterValue = readString('character');
  const indexValue = readNumber('i');

  // --- Checking is text or not ---
  if (textValue.length === 0) {
    displayString('search-result', 'You did not enter any text.');
    return;
  }

  // --- Checking is something or not ---
  if (characterValue.length === 0) {
    displayString('search-result', 'oops!  you entered fewer than one character');
    return;
  }

  // --- Checking if index is inside ---
  if (indexValue < 0 || indexValue >= textValue.length) {
    displayString(
      'search-result', `no`);
    return;
  }

  // --- Catching symbol from the text ---
  const actualCharacter = textValue[indexValue];

  // --- Calculating the result ---
  if (actualCharacter === characterValue) {
    displayString(
      'search-result', `yes`);
  } else {
    displayString(
      'search-result', `No`);
  }
});