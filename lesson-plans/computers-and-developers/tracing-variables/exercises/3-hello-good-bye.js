'use strict';

/* Comment & Log

  Add comments and logs to help a developer understand this program

*/

// DECLARE a variable named `first`
// INITIALIZE the value to "Pieter"
let first = 'Pieter';

// DECLARE a variable named `last`
// INITIALIZE the value to "Rabbit"
let last = 'Rabbit';

// DECLARE a variable named `fullName`
// INITIALIZE the value to "first + ' ' + last"
// The value of `fullName` includes variables `first` and `last`, therefore, in value `fullName` we READ the value of `first` and `last`
let fullName = first + ' ' + last;

// READ the value stored in `fullName`
console.log(fullName);

// DECLARE a variable named `greeting`
// INITIALIZE the value to 'hello' and READ the value of `fullName`
let greeting = 'hello ' + fullName;

// ASSIGN a new value to `greeting`
greeting = 'good bye ' + fullName;

// READ the value stored in `greeting`
console.log(greeting);
