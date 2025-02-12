// these are the only functions you will need
import {
  whenFormDataChanges,
  readString,
  displayString,
} from '../../../../../../lib/dom-io/index.js';

whenFormDataChanges('user-info', () => {
  debugger;

  console.log('\n--- form data changed ---');

  // --- read user input name---

  let name = readString('the-name');

  console.log(name);

  // --- read user input ---

  let nameLast = readString('the-last-name');

  console.log(nameLast);

  // --- create a message ---

  let greeting =
    'Hello ' +
    name +
    ' ' +
    nameLast +
    '!' +
    '\n' +
    'Good bye ' +
    name +
    ' ' +
    nameLast +
    '!';

  // --- display the message ---

  displayString('greeting-output', greeting);
});

/*  ===== Challenges =====

  - Modify the program so it uses a first AND a last name
  - Make the program say "hello", then "good bye" on a new line

*/
