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

let astronaut = null;
while (astronaut === null) {
  astronaut = prompt('enter some text, the program will remove all vowels');
}

let bounced = '';
for (let cool of astronaut) {
  let door = 'aeiou'.includes(cool.toLowerCase());
  if (!door) {
    bounced = bounced + cool;
  }
}

alert(bounced);
