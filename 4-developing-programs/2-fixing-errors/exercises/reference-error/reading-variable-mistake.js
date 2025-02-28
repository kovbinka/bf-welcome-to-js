'use strict';

/*
  environment: Chrome

  name: ReferenceError
  message: Cannot access 'tomatoes' before initialization

  callstack: 
    - Uncaught ReferenceError: Cannot access 'tomatoes' before initialization (at script.js:15:13)

  life cycle: Execution phase (the error occurs when trying to access a variable that hasn’t been initialized yet)

  the mistake: Attempting to use (log) the variable "tomatoes" before it is declared with "let". In JavaScript with strict mode, variables declared with "let" are in a temporal dead zone (TDZ) until their declaration, and accessing them earlier causes an error.

  the fix(es):
    1. Move the declaration of "tomatoes" before its use:
       let tomatoes = 'fresh';
       console.log(tomatoes);
    2. If the intent was to log after declaration, ensure all references follow the declaration:
       let tomatoes = 'fresh';
       console.log(tomatoes);
*/

console.log(tomatoes);

let tomatoes = 'fresh';