'use strict';

/*
  environment: Chrome

  name: SyntaxError
  message: Illegal continue statement: no surrounding iteration statement

  callstack: 
    - Uncaught SyntaxError: Illegal continue statement: no surrounding iteration statement (at script.js:17:3)

  life cycle: Parsing phase (the error occurs during syntax validation before the code can execute)

  the mistake: The "continue" statement is used inside an "if" block without being inside a loop (like "for" or "while"). In JavaScript, "continue" is only valid within iteration statements to skip to the next iteration, and using it elsewhere causes a syntax error.

  the fix(es):
    1. Remove the "continue" statement if it was unintentional, as it’s not needed here:
       const userName = 'wingdoz';
       if (userName.length > 3) {
         console.log(userName);
       }
    2. Wrap the code in a loop if "continue" was intended to skip iterations (assuming a loop context was meant):
       const userName = 'wingdoz';
       for (let i = 0; i < 1; i++) {
         if (userName.length > 3) {
           console.log(userName);
           continue;
         }
       }
*/

const userName = 'wingdoz';

if (userName.length > 3) {
  console.log(userName);
  continue;
}