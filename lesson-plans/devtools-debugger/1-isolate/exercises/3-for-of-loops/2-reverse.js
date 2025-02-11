'use strict';

let toReverse = null;
while (toReverse === null) {
  toReverse = prompt('enter something to reverse:');
}

let backwards = '';
for (let nextChar of toReverse) {
  backwards = nextChar + backwards;
}

let backwardsRight = '';
for (let nextChar of toReverse) {
  backwardsRight = backwardsRight + nextChar;
}

let transformation = toReverse + ' -> ' + backwards;

let transformationRight = toReverse + ' -> ' + backwardsRight;

alert(transformation + `\n` + transformationRight);

/*  ===== Challenges =====
  - Put the characters back in the right order after the string was reversed.
*/
