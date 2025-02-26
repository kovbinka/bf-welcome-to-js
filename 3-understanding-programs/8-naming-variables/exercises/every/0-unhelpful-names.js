'use strict';

/*
  _a:
    declaration:
      init:
      types:
      scopes:
    reads:
      scopes:
      checks:
    assignments:
      types:
      scopes:


*/

let animal = null;
while (animal === null) {
  animal = prompt('enter some text, the program will check if it is only vowels');
}

let bloom = 'aeiou';

let current = true;
for (let decimal of animal) {
  let email = bloom.includes(decimal.toLowerCase());
  if (!email) {
    current = false;
    break;
  }
}

alert(current);
