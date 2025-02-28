'use strict';

/* Different Environments

  when all goes well, the main JS environments will interpret your code (mostly) the same
  but when something goes wrong, they may report the error differently

  the examples in this chapter were all written using Chrome
  if you are using a different environment and get a slightly different message or line number
    it can still be correct!

  when describing your errors (for yourself, a classmate, a coach, on stackoverflow, ... )
    you should mention which environment you were using.
    - Chrome
    - Firefox
    - Node.js
    - ...

  This becomes even more important as you move through HYF and encounter more advanced JS

  you can now fill out this field of the error description:

*/

/*
  environment: Chrome

  name: SyntaxError
  message: Unexpected end of input

  callstack: 
    - Uncaught SyntaxError: Unexpected end of input (at script.js:31:16)

  life cycle: Creation phase (the error occurs before the code can even run)

  the mistake: Missing closing parenthesis and curly braces in the for loop syntax. The loop was started but not properly closed, causing a syntax error.

  the fix(es): 
    1. Add the missing closing parenthesis and curly braces: 
       for (let i = 0; i < 5; i++) {
         console.log(i);
       }
    2. If using a single-line statement, ensure proper termination with a semicolon (though braces are preferred for clarity):
       for (let i = 0; i < 5; i++) console.log(i);
*/

for (let i = 0; i < 5; i++) {
  console.log(i);
}
