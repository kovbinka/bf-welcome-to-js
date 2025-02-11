'use strict';

const inputFirst = prompt('enter your first name:');
const inputLast = prompt('enter your last name'); 

let greeting = '';
if (inputFirst + inputLast  === null) {
  greeting = 'hello anonymous.';
} else {
  greeting = 'hello ' + inputFirst + ' ' + inputLast + '!';
}

alert(greeting);

/*  ===== Challenges =====
  - Ask the user for their first and last names.
  - Greet them with their full name.
*/
