'use strict';

console.log('--- in execution phase ---');

/*
  environment: chrome 

  name: ReferenceError
  message: Cannot access 'isValidUserName' before initialization

  location: 24

  life cycle: in execution phase

  the mistake: variable is called rather than initialized

  the fix(es): move variable from 27 line above first `if` condition
*/

const userName = 'chiobin';
console.log('userName:', typeof userName, userName);

let isValidUserName;

if (userName.length > 3) {
  isValidUserName = true;
}

if (userName.length <= 3) {
  isValidUserName = false;
}

console.log('isValidUserName:', typeof isValidUserName, isValidUserName);
