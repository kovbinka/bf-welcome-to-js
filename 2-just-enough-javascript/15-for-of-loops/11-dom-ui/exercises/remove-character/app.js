import {
  whenFormDataChanges,
  readString,
  displayString,
} from '../../../../../lib/dom-io/index.js';

whenFormDataChanges('search-field', () => {
  // debugger;
  console.log('--- form data changed ---');

  // --- read the user's input ---
  let readInput = readString('phrase');
  let readChar = readString('character');

  // --- remove the character if there is only one ---
  let output = '';

 if (readChar === '' || readChar.length > 1){
   output = 'you can only skip one character at a time';
 } else {
   for (let char of readInput){
     if (char !== readChar) {
       output += char;
     }
   }
 }

  // --- display the result ---
  displayString('filtered', output);
});
