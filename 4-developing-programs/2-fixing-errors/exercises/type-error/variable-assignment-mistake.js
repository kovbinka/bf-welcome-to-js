'use strict';

/*
  environment: Chrome

  name: SyntaxError
  message: Invalid left-hand side in assignment

  callstack:
    - Uncaught SyntaxError: Invalid left-hand side in assignment (at script.js:14:1)

  life cycle: Parse phase (the error occurs during parsing, before code execution)

  the mistake: The code attempts to assign a value to the literal `true`, which is not allowed.
              Literals in JavaScript (e.g., true, false, null, 1, "text") are immutable 
              and cannot be used on the left-hand side of an assignment (=).

  the fix(es):
    1. Instead of reassigning the literal, assign the value to the variable:
       let isHappy = false;
       isHappy = true;

    2. Use conditional assignment:
       let isHappy = false;
       if (!isHappy) isHappy = true;
*/

let isHappy = false;

isHappy = true; // Corrected: Assigning to the variable instead of the literal

console.log(isHappy); // Output: true
