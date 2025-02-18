// these are the only functions you will need
import {
  whenFormDataChanges,
  readNumber,
  displayString,
} from '../../../../../lib/dom-io/index.js';

whenFormDataChanges('numbers', () => {
  // debugger;
  console.log('\n--- form data changed ---');

  // --- read user input ---

  const a = readNumber('left-num');
  const b = readNumber('right-num');

  // --- do the math ---
  function result(a, b) {
    return `__ + __ === ${a + b}
__ - __ === ${a - b}
__ * __ === ${a * b}
__ / __ === ${a / b}
__ % __ === ${a % b}
`;
  }

  // --- create a message

  // --- display the message ---
  displayString('sum', result(a, b));
});
