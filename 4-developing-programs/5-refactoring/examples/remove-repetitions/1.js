'use strict';

/*
  Refactor this program to use a boolean flag in the I/O loop
*/

let phrase = null;
let hasInput = false;

while (!hasInput) {
  phrase = prompt(
    'enter something with duplicated letters, they will be removed',
  );
  hasInput = (phrase !== null);
}

let previous = '';
let noRepetitions = '';
for (const next of phrase) {
  if (next !== previous) {
    noRepetitions = noRepetitions + next;
    previous = next;
  }
}

alert(noRepetitions);