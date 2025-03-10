'use strict';

/*
  refactor this program to use `break`/`continue` in the `for-of` loop
*/

let sentence = '';

let isValid = false;
while (!isValid) {
  sentence = prompt('enter a sentence with at least 2 words');

  if (sentence === null) {
    alert('there is no escape');
    continue;
  }

  sentence = sentence.trim();
  if (sentence.length < 3) {
    alert('"' + sentence + '" is too short to have two words');
    continue;
  } else if (!sentence.includes(' ')) {
    alert('there is only one word');
    continue;
  } else {
    isValid = true;
    break;
  }
}

sentence = sentence + ' ';

let newSentence = '';
let nextWord = '';
for (const character of sentence) {
  if (character !== ' ') {
    nextWord = nextWord + character;
    continue; // Skip to the next iteration if character is not a space
  }

  const keep = confirm('do you want to keep this word:\n\n"' + nextWord + '"');
  if (keep) {
    newSentence = newSentence + ' ' + nextWord; // Add space before word
  }
  nextWord = '';

  if (character === ' ' && newSentence.length > 0 && nextWord === '') {
    break; // Exit loop if we've processed all words (last space encountered)
  }
}

alert(newSentence);
