'use strict';

/*
  log every letter that is removed from the user's input
  hint: you may need to add an `else` statement
*/

let phrase = null;
while (phrase === null) {
  phrase = prompt(
    'enter something with duplicated letters, they will be removed',
  );
}

let previous = '';

let noRepetitions = ''; // final result

for (const next of phrase) {
  if (next !== previous) { // if char is not previous then final result will be noRepetitions + next
    noRepetitions = noRepetitions + next;
  } else {
    console.log('Removed: ' + next); // logged
  }
  previous = next;
}

alert(noRepetitions);
