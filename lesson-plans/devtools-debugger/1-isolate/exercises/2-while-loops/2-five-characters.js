'use strict';

// - Change the condition to 10 characters.
/*let input = null;
while (input === null || input.length !== 10) {
  input = prompt('enter something with 10 characters:');
}

let message = 'thank you for "' + input + '"!';

alert(message);
*/

let inputFirstPart = null;
while (inputFirstPart === null || inputFirstPart !== 'every') {
  inputFirstPart = prompt("enter 'every'");
}

let inputSecondPart = null;
while (inputSecondPart === null || inputSecondPart !== 'thing') {
  inputSecondPart = prompt("enter 'thing'");
}

let message = 'thank you for:' + ' ' + inputFirstPart + inputSecondPart + '!';

alert(message);

/*  ===== Challenges =====
  - Change the condition to 10 characters.
  - Make the user write "everything" in 2 steps.
*/
