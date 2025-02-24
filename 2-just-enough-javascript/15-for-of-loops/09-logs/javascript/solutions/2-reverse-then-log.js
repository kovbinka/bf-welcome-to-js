'use strict';

let backwards = 'tpircsavaj';
let reverse = '';

for (let char of backwards) {
  reverse = char + reverse;
}
// use a for-of loop to reverse `backwards`
//  assign the reversed string to `language`
let language = reverse;

for (let char of language) {
  console.log(char);
}

// log each character in `language`
