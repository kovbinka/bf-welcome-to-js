'use strict';

/*
  environment: Chrome

  name: SyntaxError
  message: Unexpected number

  callstack: 
    - Uncaught SyntaxError: Unexpected number (at script.js:16:7)

  life cycle: Parsing phase (the error occurs during syntax validation before the code can execute)

  the mistake: The code tries to use the numeric literal "3" as a variable name in a "const" declaration, which is invalid. In JavaScript, variable names must start with a letter, underscore (_), or dollar sign ($), and cannot be numeric literals.

  the fix(es):
    1. Use a valid variable name starting with a letter, underscore, or dollar sign:
       const three = 'three';
    2. If the intent was to associate a number with a value, use a descriptive name:
       const number3 = 'three';
*/

const 3 = 'three';