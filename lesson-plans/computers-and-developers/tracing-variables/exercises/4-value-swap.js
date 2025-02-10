'use strict';

/* Value Swap

  Can you predict what the [trace] button will log to the console?
    use the [table] button to write down your predictions

  study tips: [variables], [open in] jsTutor, [ask me]

*/

// DECLARE a variable named `a`
// INITIALIZE the value to 'y'
let a = 'y';

// DECLARE a variable named `b`
// INITIALIZE the value to 'x'
let b = 'x';

// DECLARE a variable named `t`
// INITIALIZE the value to ' '
let t = '';

// READ the value stored in `a, b, t`
console.log(a, b, t);

// ASSIGN a new value to `t` to value from variable 'a'
t = a;

// ASSIGN a new value to `a` to value from variable 'b'
a = b;

// ASSIGN a new value to `b` to value from variable 't'
b = t;

// READ the value stored in `a, b, t`
console.log(a, b, t);

// what did you do in this program? - Value Swap
// what are the final values of `a` and `b`? - 'x' and 'y'
// how are they changed from the initial values - they swap places

// is it possible to swap a and b without using t? - no
