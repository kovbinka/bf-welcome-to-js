

'use strict';

console.log('--- in execution phase ---');



/*
  environment: chrome

  name: SyntaxError
  message: Failed to execute 'appendChild' on 'Node': Unexpected number

  location: 25

  life cycle: in creation phase

  the mistake: name of variables is cannot be/start just from a number

  the fix(es): write a new name that does not start with numbers or integrated words 
*/


const number3 = 'three';

console.log(number3)


