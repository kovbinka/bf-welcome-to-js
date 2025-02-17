import {
  whenFormDataChanges,
  readString,
  readBoolean,
  displayString,
} from '../../../../../../../lib/dom-io/index.js';

/*
  environment:

  name: Uncaught TypeError
  message: screaming is not iterable

  location: 35

  life cycle: in execution phase

  the mistake: variable `screaming` doesn't have a text inside, it's just a variable with the method who read Boolean

  the fix(es): in `for...of` loop write `text` instead of `screaming`. Variable `text` read inputed text from some user
*/

whenFormDataChanges('reversify', () => {
  // debugger;
  console.log('--- form data changed ---');

  // --- read user input ---

  let text = readString('to-reverse');
  let screaming = readBoolean('loud');

  // --- reverse the string input ---

  let reversed = '';
  for (let character of text) {
    reversed = character + reversed;
  }

  // --- set to upper or lower case ---

  let finalText = '';
  if (screaming) {
    finalText = reversed.toUpperCase();
  } else {
    finalText = reversed.toLowerCase();
  }

  // --- display the final text ---

  displayString('out', finalText);
});
