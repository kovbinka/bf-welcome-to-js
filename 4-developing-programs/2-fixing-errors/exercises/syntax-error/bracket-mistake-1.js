'use strict';

/*
  environment: Chrome

  name: SyntaxError
  message: Unexpected end of input

  callstack: 
    - Uncaught SyntaxError: Unexpected end of input (at script.js:18:22)

  life cycle: Parsing phase (the error occurs before the code can run, during syntax validation)

  the mistake: The "for" loop is missing its closing curly brace "}". In JavaScript, a block statement like a "for" loop requires both an opening "{" and a closing "}" to define its scope, and omitting the closing brace causes a syntax error.

  the fix(es):
    1. Add the missing closing curly brace to complete the loop:
       for (let i = 0; i < 5; i++) {
         console.log(i);
       }
    2. Ensure proper block formatting for clarity and correctness:
       for (let i = 0; i < 5; i++) {
         console.log(i);
       }
*/

for (let i = 0; i < 5; i++) {
  console.log(i);