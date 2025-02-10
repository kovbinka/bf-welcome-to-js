'use strict';

// let a = '*';
// let a = '<>';
let a = '|-|'; // DECLARE a variable named `a` and INITIALIZE the value to '|-|'
// let a = '';

let b = ''; // DECLARE a variable named `b` and INITIALIZE the value to ' '
while (b.length < a.length * 3) { // We have a condition where b.length < a.length * 3 and if it's true then the loop is starts working until the condition evaluates to false
  b = b + a; // The code loop is executed until the condition evaluates to false / Reassingment a new value with concatenation
}

// READ the value stored in `b`
console.log(b);
