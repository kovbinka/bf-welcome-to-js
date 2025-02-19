'use strict';

/*
  a user can enter two values and learn if the first includes the second.
    - given the user cancels either prompt, the program is sad
    - given the second input is part of the first, the user is told it is
    - given the cases are different, this search will still succeed
    - given the second input is not part of the first, the user is told so

  test cases:
    the user cancels:
      null, null -> ':('
      null, '' -> ':('
      '', null -> ':('
    both inputs are empty:
      '', '' -> '"" includes ""'
    only the first input is empty
      '', 'hello' -> '"" does not include "hello"'
      '', 'bye' -> '"" does not include "bye"'
    only the second input is empty
      'hello', '' -> '"hello" does include ""'
      'bye', '' -> '"bye" does include ""'
    the first input does include the second
      'car', 'A' -> '"car" does include "A"'
      'car', 'a' -> '"car" does include "a"'
      'Dog', 'do' -> '"Dog" does include "do"'
      'Dog', 'DO' -> '"Dog" does include "DO"'
    the first input does not include the second
      'javascript', 'css' -> '"javascript" does not include "css"'
      'java script', 'as' -> '"java script" does not include "as"'
      'Java Script', 'as' -> '"Java Script" does not include "as"'
*/

console.log('--- begin program ---');

// ask the user for the first value to check for inclusion.
let text = prompt('Enter the first value:');

// ask the user for the second value to search within the first.
let query = prompt('Enter the second value to search for:');

// set the initial output, which will change based on conditions.
let output = ':(';

if (text !== null && query !== null) { // check if the input for either field was not canceled.
    if (text === '' && query === '') { // check if both inputs are empty.
        output = '"" includes ""';
    } else if (text === '') { // check when the first value is empty but the second is not.
        output = '"" does not include "' + query + '"';
    } else if (query === '') { // check when the second value is empty but the first is not.
        output = '"' + text + '" does include ""';
    } else {
        if (text.toLowerCase().includes(query.toLowerCase())) { // use toLowerCase() for case-insensitive comparison.
            output = '"' + text + '" does include "' + query + '"';
        } else {
            output = '"' + text + '" does not include "' + query + '"';
        }
    }
}

// show the result to the user via alert.
alert(output);

console.log('--- end program ---');

/*
  checklist:
    [x] the code is formatted
    [x] linting check passes
    [x] variable names are clear and helpful
    [x] each line of code is explained in a comment above that line
        - use full sentences and correct JS vocabulary
    [x] the program runs
    [x] the program has no errors
    [x] all of the test cases work
    [x] you tested strange inputs that could break your program (edge cases)
*/