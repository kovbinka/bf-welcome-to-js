'use strict';

/*
  environment: Chrome

  name: SyntaxError
  message: Unexpected token undefined

  callstack: 
    - Uncaught SyntaxError: Unexpected token undefined (at script.js:15:7)

  life cycle: Parsing phase (the error occurs during syntax validation before the code can execute)

  the mistake: The reserved keyword "undefined" is used as a variable name in a "const" declaration, which is not permitted in JavaScript. "undefined" is a built-in identifier representing an uninitialized or nonexistent value and cannot be redefined or used as a variable name.

  the fix(es):
    1. Use a valid, non-reserved variable name instead of "undefined":
       const value = 'three';
    2. If the intent was to represent something related to "undefined," use a descriptive alternative:
       const undefinedValue = 'three';
*/

const undefined = 'three';