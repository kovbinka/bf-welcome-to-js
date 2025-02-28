'use strict';

/*
  environment: Chrome

  name: SyntaxError
  message: Unexpected token (

  callstack: 
    - Uncaught SyntaxError: Unexpected token ( (at script.js:18:8)

  life cycle: Parsing phase (the error occurs during syntax validation before the code can execute)

  the mistake: The "else" clause is followed by a condition "(userName.length < 5)" without an "if", which is invalid syntax. In JavaScript, an "else" must either stand alone or be followed by an "if" (forming "else if") when introducing a new condition.

  the fix(es):
    1. Correct the syntax by adding "if" to form a proper "else if" chain:
       const userName = 'indrogo';
       if (userName.length < 3) {
         console.log('too short');
       } else if (userName.length < 5) {
         console.log('just right');
       } else {
         console.log('too long');
       }
    2. If only two conditions were intended, remove the invalid "else" and condition:
       const userName = 'indrogo';
       if (userName.length < 3) {
         console.log('too short');
       } else {
         console.log('too long');
       }
*/

const userName = 'indrogo';

if (userName.length < 3) {
  console.log('too short');
} else (userName.length < 5) {
  console.log('just right');
} else {
  console.log('too long');
}