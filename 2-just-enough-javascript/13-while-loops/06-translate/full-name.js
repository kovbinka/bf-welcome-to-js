// #todo

'use strict';

/* Full Name


  Data In:

  Data Out:

  Test Cases:

*/

/* ---  ?  --- */

// firstName <- null
let firstName = null;

// WHILE: firstName === null
//   firstName <- prompt('enter a first name')
// :END WHILE
while (firstName === null){
  firstName = prompt('enter a first name');
}

/* ---  ?  --- */

// lastName <- null
let lastName = null;
// WHILE: lastName === null
//   lastName <- prompt('enter a last name')
// :END WHILE
while (lastName === null){
  lastName = prompt('enter last name');
}

/* ---  ?  --- */

// fullName <- firstName + ' ' + lastName
let fullName = firstName + ' ' + lastName;

/* ---  ?  --- */

// alert(fullName)
alert(fullName);