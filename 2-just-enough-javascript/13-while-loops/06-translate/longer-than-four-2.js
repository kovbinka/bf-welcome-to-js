'use strict';

/*


  Data In:

  Data Out:

  Test Cases:

*/

/* ---   ?   --- */

// input <- ''
let input = '';
let prompting = true;

while (prompting) {
    input = prompt('enter something longer than 4 characters, or "cancel" to leave');
    
    if (input === null || input === 'cancel') {
        prompting = false;
        input = 'you canceled';
    } else if (input.length > 4) {
        prompting = false;
    }
}
alert(input);
// WHILE: prompting
//   input <- prompt('enter something longer than 4 characters, or "cancel" to leave')
//   IF: input === null
//     prompting <- false
//     input <- 'you canceled'
//   ELSE: IF: input.length > 4
//     prompting <- false
//   :END IF
// :END WHILE

/* ---   ?   --- */

// alert(input)
