'use strict';


//   - Add an hyphen after each character.
/*let text = null;
while (text === null) {
  text = prompt('enter some text, each character will be doubled:');
}

let doubled = '';
for (let nextChar of text) {
  doubled = doubled + nextChar + nextChar + '-';
}

alert(doubled);*/


//- Add an hyphen only between the characters.

let text = null;
while (text === null || text.trim() === '') {
  text = prompt('enter some text, each character will be doubled:');
}

let doubledHyphened = '';
for (let i = 0; i < text.length; i++) {
  doubledHyphened += text[i];

if (i !== text.length - 1 && text[i] !== ' ' && text[i + 1] !== ' '){
  doubledHyphened += '-';
}
}

alert(doubledHyphened);

/*  ===== Challenges =====
  - Add an hyphen after each character.
  - Add an hyphen only between the characters.
*/
