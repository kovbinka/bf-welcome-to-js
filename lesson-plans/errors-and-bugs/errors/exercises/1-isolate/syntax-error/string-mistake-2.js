

'use strict';

console.log('--- in execution phase ---');


/*
  environment: chrome

  name: SyntaxError
  message: Failed to execute 'appendChild' on 'Node': Unexpected string

  location: 23

  life cycle: in creation phase

  the mistake: single parentheses instead of double parentheses

  the fix(es): change single parentheses to double parentheses
*/

const quotesInQuotes = 'remind yourself "i can do this!" at least once a day';

// console.log(quotesInQuotes)


