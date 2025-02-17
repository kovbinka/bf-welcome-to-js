// #todo

'use strict';

// combining .toUpperCase or .toLowerCase with .includes is helpful
//  you can now search strings without worrying about upper or lower case

console.log('-- case insensitive string searches --');

// examples
console.log('JavaScript'.toLowerCase().includes('script')); // true
console.log('JAVASCRIPT'.toLowerCase().includes('script')); // true
console.log('javascript'.toLowerCase().includes('script')); // true

console.log('JavaScript'.toUpperCase().includes('SCRIPT')); // true
console.log('JAVASCRIPT'.toUpperCase().includes('SCRIPT')); // true
console.log('javascript'.toUpperCase().includes('SCRIPT')); // true

// exercises
//  fill in the blanks with something that will evaluate to true
//  there's many different answers! how many can you find?

console.log('PassPort'.toLowerCase().includes('pass')); // true
console.log('hACK YouR FuTuRE'.toLowerCase().includes('your')); // true
console.log('_Robin_Batman'.toLowerCase().includes('batman')); // true

console.log('PassPort'.toUpperCase().includes('PORt')); // false
console.log('hACK YouR FuTuRE'.toUpperCase().includes('future')); // false
console.log('_Robin_Batman'.toUpperCase().includes('ROBin')); // false

console.log('MAGAZINE "TIME"'.toLowerCase().includes('tim')); // true
console.log('HELLO WORLD'.toLowerCase().includes('o w')); // true
console.log('dOnE. ErRor'.toLowerCase().includes('. e')); // true

console.log('time is gone'.toUpperCase().includes('TIM')); // true
console.log('hElLo wOrlD'.toUpperCase().includes('O W')); // true
console.log('doNe. error'.toUpperCase().includes('. E')); // true
