'use strict';

console.log('--- in execution phase ---');

/*
  environment: chrome

  name: ReferenceError
  message: welf is not defined

  location: 20

  life cycle: in creation phase

  the mistake: variable is not initialized

  the fix(es): initialize the variable
*/

const welf = 'ingrad';

console.log(welf);
