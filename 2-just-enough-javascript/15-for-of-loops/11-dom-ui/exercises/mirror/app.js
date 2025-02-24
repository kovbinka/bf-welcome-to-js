import {
  whenFormDataChanges,
  readString,
  displayString,
} from '../../../../../lib/dom-io/index.js';

whenFormDataChanges('input', () => {
  // debugger;
  console.log('--- form data changed ---');

 // --- read the user's input ---
let input = readString('to-mirror');


  // --- mirror the text ---
  let mirrored = input.split('').reverse().join('');
  
  let divider = ' | ';
  let outputString = mirrored + divider + input;

  // --- display the result ---
  displayString('output', outputString);
});
