'use strict';

console.log('--- in execution phase ---');

/*
  environment: chrome

  name: SyntaxError
  message: Failed to execute 'appendChild' on 'Node': Identifier 'tree' has already been declared

  location: 22

  life cycle: in creation phase

  the mistake: i just need to reassing var

  the fix(es): delete `let` in 22 line
*/

let tree = 'oak';

tree = 'birch';

console.log(tree)
