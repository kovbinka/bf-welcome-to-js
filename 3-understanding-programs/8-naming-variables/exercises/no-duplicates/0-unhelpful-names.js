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

let align = null;
while (align === null) {
  align = prompt('enter something with no duplicate characters');
}

let both = '';
for (let circle of align) {
  let did = both.includes(circle);
  if (did) {
    break;
  }
  both = both + circle;
}

if (both.length === align.length) {
  alert('well done!');
} else {
  alert('too bad, try again');
}
