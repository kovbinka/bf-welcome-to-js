'use strict';

/*
  environment: Chrome

  name: SyntaxError
  message: Invalid left-hand side in assignment

  callstack: 
    - Uncaught SyntaxError: Invalid left-hand side in assignment (at script.js:16:3)

  life cycle: Parsing phase (the error occurs during syntax validation before the code can execute)

  the mistake: The code attempts to assign the value of "favoriteNumber" to the literal number "3" (3 = favoriteNumber). In JavaScript, the left-hand side of an assignment must be a variable, property, or other assignable expression, not a numeric literal.

  the fix(es):
    1. Reverse the assignment to assign the number 3 to "favoriteNumber":
       let favoriteNumber = 3;
    2. If the intent was to reassign "favoriteNumber" later, keep it as a variable and assign a new value correctly:
       let favoriteNumber = 4;
       favoriteNumber = 3;
*/

let favoriteNumber = 4;
3 = favoriteNumber;