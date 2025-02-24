'use strict';

/*


  Data In:

  Data Out:

  Test Cases:

*/

/* ---   ?   --- */

// text <- null
let text = null;

// WHILE: text === null
//   text <- prompt('enter some text')
// :END WHILE
while (text === null) {
  text = prompt('enter some text');
}
/* ---   ?   --- */

// hasAVowel <- false
let hasAVowel = false;
// FOR: letter OF text
//   IF: 'aeiouAEIOU'.includes(letter)
//     hasAVowel <- true
//     BREAK
//   :END IF
// :END FOR-OF

for (let letter of text) {
  if ('aeiouAEIOU'.includes(letter)) {
    hasAVowel = true;
    break;
  }
}
/* ---   ?   --- */

// message <- ''
let message = '';
// IF: hasAVowel
//   message <- '"' + text + '" has at least one vowel'
// ELSE:
//   message <- '"' + text + '" does not have any vowels'
// :END IF
if (hasAVowel) {
  message = '"' + text + '" has at least one vowel';
} else {
  message = '"' + text + '" does not have any vowels';
}

/* ---   ?   --- */

// alert(message)
alert(message);