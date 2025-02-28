'use strict';

/*
  environment: Chrome

  name: ReferenceError
  message: Cannot access 'isValidUserName' before initialization

  callstack: 
    - Uncaught ReferenceError: Cannot access 'isValidUserName' before initialization (at script.js:18:3)

  life cycle: Execution phase (the error occurs when attempting to assign a value to a variable that hasn’t been fully initialized yet)

  the mistake: The variable "isValidUserName" is used (assigned a value) before it is declared with "let". In JavaScript, variables declared with "let" are in a temporal dead zone (TDZ) until their declaration is reached, making any access prior to that an error.

  the fix(es):
    1. Move the declaration of "isValidUserName" before its first use:
       const userName = 'chiobin';
       let isValidUserName;
       console.log('userName:', typeof userName, userName);
       if (userName.length > 3) {
         isValidUserName = true;
       }
       if (userName.length <= 3) {
         isValidUserName = false;
       }
       console.log('isValidUserName:', typeof isValidUserName, isValidUserName);
    2. Combine declaration and initialization to avoid TDZ entirely:
       const userName = 'chiobin';
       console.log('userName:', typeof userName, userName);
       let isValidUserName = userName.length > 3;
       console.log('isValidUserName:', typeof isValidUserName, isValidUserName);
*/

const userName = 'chiobin';
console.log('userName:', typeof userName, userName);

if (userName.length > 3) {
  isValidUserName = true;
}

let isValidUserName;

if (userName.length <= 3) {
  isValidUserName = false;
}

console.log('isValidUserName:', typeof isValidUserName, isValidUserName);