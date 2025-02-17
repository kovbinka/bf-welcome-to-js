

'use strict';

console.log('--- in execution phase ---');


/*
  environment: chrome

  name: SyntaxError
  message: Failed to execute 'appendChild' on 'Node': Invalid or unexpected token

  location: 23

  life cycle: in creation phase

  the mistake: syntax error. We can't just indent between lines without a special JS character

  the fix(es): move 24' line to 23 and concatinate them. After add '\n' (between two strings) to create a escape between the lines
*/

const a = 'this is' + '\n' + 'two lines';

// console.log(a)


