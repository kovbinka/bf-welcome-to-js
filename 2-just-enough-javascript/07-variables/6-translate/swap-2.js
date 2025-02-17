// #todo

'use strict';

// a <- 'y'
let a = 'y';

// b <- 'x'
let b = 'x';

let temp;

// temp <- b
temp = b;

// b <- a
b = a;

// a <- temp
a = temp;

console.log(a, b, temp);