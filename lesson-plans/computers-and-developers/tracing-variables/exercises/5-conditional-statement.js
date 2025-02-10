'use strict';

// let a = 'Ewin';
// let a = 'Tugba';
// let a = 'Jo';
let a = 'Olesandra'; // // DECLARE a variable named `a` and INITIALIZE the value to "Olesandra"

let b = 'Hello ' + a + ', your name is ';

if (a.length > 4) {  // checking the lenght of the name
  b = b + 'long.'; // if the name is longer than 4 than add 'long.' to the end of `b` value
} else if (a.length === 4) { // checking the lenght of the name
  b = b + 'perfect.'; // if the name is is equal to 4 than add 'perfect.' to the end of `b` value
} else { // checking the lenght of the name
  b = b + 'short.'; // if the name is is shorter than 4, add 'short.' to the end of `b` value
}

// READ the value stored in `b`
console.log(b);
