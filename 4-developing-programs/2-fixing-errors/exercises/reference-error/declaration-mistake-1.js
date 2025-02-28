'use strict';

/*
  environment: Chrome

  name: ReferenceError
  message: welf is not defined

  callstack: 
    - Uncaught ReferenceError: welf is not defined (at script.js:15:1)

  life cycle: Execution phase (the error occurs when the code tries to assign a value to an undeclared variable)

  the mistake: Attempting to assign a value to the variable "welf" without declaring it using var, let, or const. In strict mode, this causes a ReferenceError because undeclared variables cannot be used.

  the fix(es):
    1. Declare the variable before using it:
       let welf = 'ingrad';
       console.log(welf);
    2. If it was meant to be a global variable (less common), explicitly declare it with var (not recommended):
       var welf = 'ingrad';
       console.log(welf);
*/

welf = 'ingrad';

console.log(welf);
