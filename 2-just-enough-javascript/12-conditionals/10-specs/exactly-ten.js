'use strict';

/*
  a user can provide any input they want to a prompt
    - given they cancel, the program is sad
    - given it is shorter than ten characters, they are told how much shorter it is
    - given it is ten characters long, they are told it's perfect
    - given it is longer than 10 characters, they are told how much too long


  test cases:
    the user cancels:
      null -> ':('
    strings with less than 10 characters:
      '' -> '"" is 10 characters too short'
      'hi' -> '"hi" is 8 characters too short'
      'laptop' -> '"laptop" is 4 characters too short'
    strings with exactly 10 characters:
      'javascript' -> '"javascript" is perfect!'
    strings with more than 10 characters:
      'open source' -> '"open source" is 11 characters too long'
      'ik woon in belgie' -> '"ik woon in belgie" is 7 characters too long'
      'javascript is perfect' -> '"javascript is perfect" is 11 characters too long'
*/

console.log('--- begin program ---');

/* --- gather user input --- */
let input = prompt('show your power here');

/* --- initializing var's to check the difference between length of input and desired result --- */
let mainDifference = 10 - input.length;
let biggerDifference = input.length - 10;

if (input !== null) { // if user write something than this condition will start working
  if (input.length === 10) { // checking if lenght of input is exactly 10
    alert(input + ' is perfect!'); 
  } else if (input.length < 10) { // checking if lenght of input is less than 10
    alert(input + ` is ${mainDifference} characters too short`);
  } else { // checking if lenght of input is longer than 10
    alert(input + ` is ${biggerDifference} characters too long`);
  }
} else {
  alert(':('); // if user did not wrote something than this condition will start working
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
