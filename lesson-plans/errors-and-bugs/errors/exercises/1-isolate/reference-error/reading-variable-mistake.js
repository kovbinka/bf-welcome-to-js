'use strict';

console.log('--- in execution phase ---');

/*
  environment: chrome

  name: ReferenceError
  message: Cannot access 'tomatoes' before initialization

  location: 20

  life cycle: in creation phase

  the mistake: variable is called rather than initialized

  the fix(es): move variable above first console.log line
*/

let tomatoes = 'fresh';

console.log(tomatoes);
