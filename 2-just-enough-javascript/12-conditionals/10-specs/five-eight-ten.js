'use strict';

/*
  a user can provide any input they want to a prompt
    - given they cancel, the program is sad
    - given it is empty, they're not even close
    - given it is less than 5 characters, they're doing better
    - given it is less than 8 characters, they're almost there
    - given it is less than 10 characters, they're so close
    - given it is exactly 10 characters, they're perfect
    - given it is longer than 10 characters, they're too long


  test cases:
    the user cancels:
      null -> ':('
    the empty string:
      '' -> 'not even close'
    strings with less than 5 characters:
      '!' -> 'better'
      'hi' -> 'better'
      'xyz' -> 'better'
      'tree' -> 'better'
    strings with less than 8 characters
      'horse' -> 'almost there'
      'banana' -> 'almost there'
      'bananas' -> 'almost there'
    strings with less than 10 characters
      'daylight' -> 'so close'
      'warehouse' -> 'so close'
    strings with 10 characters
      'javascript' -> 'perfect!'
    strings with more than 10 characters:
      'watermelons' -> 'too long'
*/

console.log('--- begin program ---');

/* --- gather user input --- */
let input = prompt('write something and you will see the quest');

/* --- checking which of the conditions will be applied. --- */
if (input !== null) { // if user write something than this condition will start working
  if (input === '') { // if user will click "OK" than this condition will start working
    alert('not even close');
  } else if (input.length < 5) { // checking if lenght of input is less than 5
    alert('better');
  } else if (input.length < 8) { // checking if lenght of input is less than 8
    alert('almost there');
  } else if (input.length < 10) { // checking if lenght of input is less than 10
    alert('so close');
  } else if (input.length === 10) { // checking if lenght of input is exactly 10
    alert('perfect!');
  } else { // checking if lenght of input is more than 10
    alert('too long');
  }
} else {
  alert(':('); // if user did not wrote something than this condition will start working
  console.log(':(');
}

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
