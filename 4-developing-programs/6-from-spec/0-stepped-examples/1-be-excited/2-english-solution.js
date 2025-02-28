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

/*
  a while loop that exits when the user inputs a string
*/

/* --- make the string excited --- */
//  Data Before:  the user's string
//  Data After:   the same text with an exclamation mark


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


/*
  add an exclamation mark to the end of the user's input
*/

/* --- display the string to the user --- */
//  Data Out:  an excited string

/*
  display the new string to the user
*/
