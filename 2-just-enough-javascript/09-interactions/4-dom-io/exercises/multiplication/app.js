import {
  whenFormDataChanges,
  readNumber,
  displayString,
} from '../../../../../lib/dom-io/index.js';

whenFormDataChanges('calculator', () => {
  // debugger;
  console.log('--- form data changed ---');

  // --- read user values ---
  const left = readNumber('left');
  const right = readNumber('right');

  // --- multiply the numbers ---
  const result = left * right;

  // --- create a message ---

  let message = left + ' * ' + right + ' === ' + result;


  // --- display the message ---
  displayString('product', message);
});
