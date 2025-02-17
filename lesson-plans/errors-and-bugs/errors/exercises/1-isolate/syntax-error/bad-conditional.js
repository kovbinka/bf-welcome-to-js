

'use strict';

console.log('--- in execution phase ---');


/*
  environment: chrome 

  name: SyntaxError
  message: Failed to execute 'appendChild' on 'Node': Unexpected token

  location: 27

  life cycle: in creation phase

  the mistake: in `if...else` statement one condition is missing - else if

  the fix(es): add a condition else if into the line 27
*/

let userName = 'indrogo';

if (userName.length < 3) {
  console.log('too short');
} else if (userName.length < 5) {
  console.log('just right');
} else {
  console.log('too long');
}


