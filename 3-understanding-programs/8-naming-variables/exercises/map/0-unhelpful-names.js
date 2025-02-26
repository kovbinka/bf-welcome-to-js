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

let allow = null;
while (allow === null) {
  allow = prompt('enter some text, can you guess what the program does?');
}

let buy = '';
for (let core of allow) {
  if ('aeiou'.includes(core)) {
    buy = buy + core.toUpperCase();
  } else if ('AEIOU'.includes(core)) {
    buy = buy + core.toLowerCase();
  } else {
    buy = buy + core;
  }
}

alert(buy);
