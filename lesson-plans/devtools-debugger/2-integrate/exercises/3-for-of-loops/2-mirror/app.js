import {
  whenFormDataChanges,
  readString,
  displayString,
  readBoolean,
} from '../../../../../../lib/dom-io/index.js';

whenFormDataChanges('input', () => {
  debugger;

  console.log('--- form data changed ---');

  // --- read the user's input ---

  let userText = readString('to-mirror');
  let dividerStar = readBoolean('divider-star');
  let dividerAmp = readBoolean('divider-amp');
  let dividerHyphen = readBoolean('divider-hyphen');

  // --- mirror the text ---

  let newUserReversed = '';
  for (let char of userText) {
    newUserReversed = char.toUpperCase() + newUserReversed.toUpperCase();
  }

  let newUserText = '';
  for (let char of userText) {
    newUserText = newUserText + char;
  }

  let mainDivider = '';
  if (dividerStar) {
    mainDivider = '*';
  } else {
    if (dividerAmp) {
      mainDivider = '&';
    } else {
      if (dividerHyphen) {
        mainDivider = '-';
      }
    }
  }

  let finished = newUserReversed + ' ' + mainDivider + ' ' + newUserText;

  displayString('output', finished);
});

/*  ===== Challenges =====

  - make the mirror image upper case
  - make the non-mirror image lower case
  - let the user decide which character goes in the middle
      for example, any of these should be possible:
        asdf * fdsa
        asdf & fdsa
        asdf - fdsa
        asdf o fdsa
        ...
      you will need to add an input to the HTML file

*/
