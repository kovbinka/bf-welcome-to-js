'use strict';

/*
  environment: Chrome

  name: SyntaxError
  message: Identifier 'tree' has already been declared

  callstack: 
    - Uncaught SyntaxError: Identifier 'tree' has already been declared (at script.js:16:5)

  life cycle: Parsing phase (the error occurs during syntax validation before the code can execute)

  the mistake: The variable "tree" is declared twice using "let" in the same scope. In JavaScript, "let" does not allow redeclaration of a variable identifier within the same block scope, unlike "var" which permits redeclaration.

  the fix(es):
    1. Remove the second "let" declaration and simply reassign the value:
       let tree = 'oak';
       tree = 'birch';
    2. If separate variables are intended, use distinct names:
       let tree1 = 'oak';
       let tree2 = 'birch';
*/

let tree = 'oak';

let tree = 'birch';