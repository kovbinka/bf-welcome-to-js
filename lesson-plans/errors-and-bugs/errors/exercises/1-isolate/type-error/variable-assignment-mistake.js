

'use strict';

console.log('--- in execution phase ---');


/*
  environment: chrome

  name: SyntaxError
  message: Failed to execute 'appendChild' on 'Node': Invalid left-hand side in assignment

  location: 25

  life cycle: in creation phase

  the mistake: it's a type and syntax error

  the fix(es): true is a constant value, it always remains true and cannot be overridden. I just need to reassign the variable
*/

let isHappy = false;

isHappy = true;


