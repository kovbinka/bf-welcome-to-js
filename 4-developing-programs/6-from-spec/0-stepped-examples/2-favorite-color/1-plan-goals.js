'use strict';

/* Favorite Color

  the user can enter their favorite word and be told if it is long or short.
    - given the user cancels, they will be prompted again
    - given the input is empty, they will be prompted again
    - given their input is 7 characters or longer:
        they are told it is a long word
    - given their input is shorter than 7 characters:
        they are told it is a short word


  test cases:
    long words:
      'abcdefg' -> '"abcdefg" is a long word'
      'computer' -> '"computer" is a long word'
      'cybersecurity' -> '"cybersecurity" is a long word'
    short words:
      'abcdef' -> '"abcdef" is a short word'
      'jello' -> '"jello" is a short word'
      'hi' -> '"hi" is a short word'
*/

/* --- gather user input --- */
// Data In:     null or a string
// Data After:  a non-empty string


let input = null;

while(input === null || input === ''){
  input = prompt('type something longer than 7 character');
}

if(input.length > 7){
    alert("yep, it's a long word");
  } else {
    alert("no, this is too short");
  }

/* --- create the final message --- */
// Data Before: a non-empty string
// Data After:  a message describing the string as long or short

/* --- display the message for the user --- */
// Data Out:    a message describing the string as long or short
