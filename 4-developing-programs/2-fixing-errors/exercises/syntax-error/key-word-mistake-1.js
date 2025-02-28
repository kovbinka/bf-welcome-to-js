'use strict';

/*
  environment: Chrome

  name: SyntaxError
  message: Unexpected token let

  callstack: 
    - Uncaught SyntaxError: Unexpected token let (at script.js:15:8)

  life cycle: Parsing phase (the error occurs during syntax validation before the code can execute)

  the mistake: The "if" statement’s condition contains a "let" declaration ("let i = 0"), followed by a loop-like structure ("i < 5; i++"), which is invalid syntax. In JavaScript, "let" cannot be used directly in an "if" condition, and the loop syntax belongs in a "for" statement, not an "if".

  the fix(es):
    1. Replace the "if" with a "for" loop, as the intent seems to be iteration:
       for (let i = 0; i < 5; i++) {
         console.log(i);
       }
    2. If an "if" was intended, use a valid condition without a "let" declaration (assuming a different purpose):
       let i = 0;
       if (i < 5) {
         console.log(i);
       }
*/

if (let i = 0; i < 5; i++) {
  console.log(i);
}