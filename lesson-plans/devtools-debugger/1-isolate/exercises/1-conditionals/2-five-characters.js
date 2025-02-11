'use strict';

//   - Give "input" a default value before asking for the user input.
let input = 'by default'
input = prompt('enter something with 5 characters:');

//   - Change input's value after asking for the user input so that we always show "thank you!".
/* 
let message = '';
if (input === null) {
  message = 'thank you';
} else {
  message = 'thank you';
  }
*/

/* let message = '';
if (input === null) {
  message = ':(';
} else if (input.length < 5) {
  message = 'too short';
} else if (input.length === 5) {
  message = 'thank you!';
} else {
  message = 'too long';
}*/


//   - Add one more conditional so that we never show ":(" and don't always show "thank you!".
let message = '';
if (input.length < 5) {
  message = 'too short';
  } else if (input.length === 5) {
    message = 'thank you!';
  } else {
    message = message = 'too long';
  }



alert(message);

/*  ===== Challenges =====
  - Give "input" a default value before asking for the user input.
  - Change input's value after asking for the user input so that we always show "thank you!".
  - Add one more conditional so that we never show ":(" and don't always show "thank you!".
*/
