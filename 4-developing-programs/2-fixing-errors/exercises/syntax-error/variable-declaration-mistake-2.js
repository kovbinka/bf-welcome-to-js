'use strict';

/*
  environment: Chrome

  name: SyntaxError
  message: Missing initializer in const declaration

  callstack: 
    - Uncaught SyntaxError: Missing initializer in const declaration (at script.js:16:7)

  life cycle: Parsing phase (the error occurs during syntax validation before the code can execute)

  the mistake: The variable "path" is declared with "const" but without an initial value, and "const" variables must be initialized at declaration. Additionally, attempting to assign a value to "path" later in the "if-else" block would also fail because "const" variables cannot be reassigned.

  the fix(es):
    1. Use "let" instead of "const" to allow assignment after declaration:
       const userName = 'qopiznu';
       let path;
       if (userName.length > 4) {
         path = 'if';
       } else {
         path = 'else';
       }
       console.log(path);
    2. Initialize "path" with a conditional expression at declaration using a ternary operator:
       const userName = 'qopiznu';
       const path = userName.length > 4 ? 'if' : 'else';
       console.log(path);
*/

const userName = 'qopiznu';

const path;

if (userName.length > 4) {
  path = 'if';
} else {
  path = 'else';
}

console.log(path);