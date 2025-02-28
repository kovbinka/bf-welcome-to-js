'use strict';

/*
  environment: Chrome

  name: SyntaxError
  message: Unexpected token for

  callstack: 
    - Uncaught SyntaxError: Unexpected token for (at script.js:15:7)

  life cycle: Parsing phase (the error occurs during syntax validation before the code can execute)

  the mistake: The reserved keyword "for" is used as a variable name in a "const" declaration, which is not allowed in JavaScript. Additionally, the syntax "(let i = 0; i < 5; i++)" resembles a "for" loop header but is incorrectly placed after "const for =", making it invalid.

  the fix(es):
    1. Replace the "const for" with a proper "for" loop, assuming the intent was to iterate:
       for (let i = 0; i < 5; i++) {
         console.log(i);
       }
    2. If a constant was intended, use a valid identifier instead of "for" and correct the syntax (less likely given the context):
       const loop = 5;
       for (let i = 0; i < loop; i++) {
         console.log(i);
       }
*/

const for = (let i = 0; i < 5; i++) {
  console.log(i);
}