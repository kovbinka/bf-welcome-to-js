import {
  whenFormDataChanges,
  readString,
  displayString,
} from '../../../../../lib/dom-io/index.js';

whenFormDataChanges('to-sort', () => {
  // debugger;
  console.log('--- form data changed ---');

  // --- read the user's input ---
  const stringOne = readString('string-a');
  const stringTwo = readString('string-b');
  let message = '';
  
  // --- sort them input by length ---
  if (stringOne.length === stringTwo.length) {
    message = stringOne + '\n' + stringTwo; 
  } else if (stringOne.length > stringTwo.length) {
    message = stringTwo + ', ' + stringOne;
  } else if (stringOne.length < stringTwo.length) {
    message = stringOne + ', ' + stringTwo;
  }

  // --- display the sorted strings ---
  displayString('sorted', message);
});
