// #todo

'use strict';

console.log('-- using .includes for case-sensitive searching --');

// examples
console.log('JavaScript'.includes('script')); // false
console.log('JavaScript'.includes('Script')); // true
console.log('JavaScript'.includes('vaSc')); // true
console.log('JavaScript'.includes('VAsC')); // false

// exercises
console.log('HackYourFuture'.includes('Hack')); // true
console.log('HackYourFuture'.includes('our')); // true
console.log('HackYourFuture'.includes('Fut')); // true

console.log('HackYourFuture'.includes('ourt')); // false
console.log('HackYourFuture'.includes('HACK')); // false
console.log('HackYourFuture'.includes('your')); // false

console.log('Good Bye'.includes(' Bye')); // true
console.log('Ford. Car'.includes('. Car')); // true
console.log('2+2'.includes('+')); // true

console.log('Hi my name is...'.includes('hi')); // false
console.log('ROAD'.includes('road')); // false
console.log('ima'.includes('Ima')); // false
