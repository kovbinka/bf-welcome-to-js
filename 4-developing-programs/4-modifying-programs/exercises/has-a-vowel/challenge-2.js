'use strict';

/*
  modify this program so it only checks for consonants

  you can do this by changing one string, renaming a variable and the user's instructions
*/

let characters = null;
while (characters === null) {
  characters = prompt('enter some characters');
}

const vowels = 'bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ';

let hasAVowel = false;
for (const char of characters) {
  if (vowels.includes(char)) {
    hasAVowel = true;
    break;
  }
}

if (hasAVowel) {
  alert('"' + characters + '" has at least one vowel');
} else {
  alert('"' + characters + '" has no vowels');
}
