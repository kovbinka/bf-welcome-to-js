'use strict';

/*
  environment: Chrome

  name: ReferenceError
  message: i is not defined

  callstack: 
    - Uncaught ReferenceError: i is not defined (at script.js:18:13)

  life cycle: Execution phase (the error occurs when trying to access a variable outside its scope)

  the mistake: The variable "i" is declared with "let" inside the "for" loop, which limits its scope to the loop block. Attempting to access "i" outside the loop results in a ReferenceError because it is not defined in the outer scope.

  the fix(es):
    1. Declare "i" in the outer scope with "let" if it needs to be accessed after the loop:
       let i;
       for (i = 0; i < 5; i++) { }
       console.log(i);
    2. Use "var" instead of "let" to make "i" function-scoped (not block-scoped), though this is less modern:
       for (var i = 0; i < 5; i++) { }
       console.log(i);
    3. Move the console.log inside the loop if the intent was to log "i" during iteration:
       for (let i = 0; i < 5; i++) {
         console.log(i);
       }
*/

for (let i = 0; i < 5; i++) { }
console.log(i);
}