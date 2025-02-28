'use strict';

/*
  environment: Chrome

  name: SyntaxError
  message: Unexpected token =

  callstack: 
    - Uncaught SyntaxError: Unexpected token = (at script.js:15:6)

  life cycle: Parsing phase (the error occurs during syntax validation before the code can execute)

  the mistake: The reserved keyword "const" is used as a variable name in a declaration, which is not allowed in JavaScript. "const" is a keyword used to declare constants and cannot be used as an identifier.

  the fix(es):
    1. Use a valid variable name instead of "const":
       const motto = 'always be learning';
    2. If a different declaration type was intended, choose an appropriate keyword and name:
       let motto = 'always be learning';
*/

const = 'always be learning';