'use strict';

/* Be Excited

  a user can input any text and it will become excited.
    - given the user cancels: they are prompted again
    - given the input is a string: it will have an "!" added to the end

  test cases:
    ''      -> '!'
    '!'     -> '!!'
    'JS'    -> 'JS!'
    'hello' -> 'hello!'
*/

/* --- get a string from the user --- */
//  Data In:      a string or null
//  Data After:   the first string the user inputs

// input <- null
// WHILE: input === null
//   input <- prompt('enter something')
// :END WHILE

let input = '';

while (input === null || input === ''){
  input = prompt('type something scary ;)');

  if (input === null) {
    alert(`let's comeback`);
    continue;
  }

  if (input !== null && input !== ''){
    input = input + "!";
  }

  alert(input);
}

/* --- make the string excited --- */
//  Data Before:  the user's string
//  Data After:   the same text with an exclamation mark

// output <- input + '!'

/* --- display the string to the user --- */
//  Data Out:  an excited string

// alert(output)
