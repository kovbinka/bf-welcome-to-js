'use strict';

/* Four Variables

  Can you predict what the [trace] button will log to the console?
    use the [table] button to write down your predictions

  study tips: [variables], [open in] jsTutor, [ask me]

*/

// trace the program a few times with different values

// DECLARE a variable named `a`
// INITIALIZE the value to "Pieter/Blake/George"
let a = 'Pieter';
// let a = 'Blake';
// let a = 'George';

// DECLARE a variable named `b`
// INITIALIZE the value to "Rabbit/Wozzeck/Schoenberg"
let b = 'Rabbit';
// let b = 'Wozzeck';
// let b = 'Schoenberg';

// DECLARE a variable named `c`
// INITIALIZE the value to "Pieter/Blake/George Rabbit/Wozzeck/Schoenberg"
let c = a + ' ' + b;

// DECLARE a variable named `d`
// INITIALIZE the value to 'hello Pieter/Blake/George Rabbit/Wozzeck/Schoenberg'
let d = 'hello ' + c;

// READ the value stored in `d`
console.log(d);

// ASSIGN a new value to `d` to :'good bye Pieter/Blake/George Rabbit/Wozzeck/Schoenberg'
d = 'good bye ' + c;

// READ the value stored in `d`
console.log(d);
