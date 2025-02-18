// these are the only functions you will need
import {
  whenFormDataChanges,
  readNumber,
  displayString,
} from '../../../../../lib/dom-io/index.js';

whenFormDataChanges('nums', () => {
  // debugger;
  console.log('\n--- form data changed ---');

  // --- read user input ---

  const a = readNumber('left-num');
  const b = readNumber('right-num');

  // --- compare the numbers ---

  // function greater(a, b) {
  //   return a > b;
  // }
  // let resultGreater = greater(a, b).toString();

  // function greaterEqual (a, b) {
  //   return a >= b;
  // }
  // let resultGreaterEqual = greaterEqual(a, b).toString();

  // function equal (a, b) {
  //   return a === b;
  // }
  // let equalResult = equal(a, b).toString();

  // function lessEqual (a, b) {
  //   return a <= b;
  // }
  // let resultLessEqual = lessEqual(a, b).toString();

  // function less (a, b) {
  //   return a < b;
  // }
  // let resultLess = less(a, b).toString();

  // // --- create a message
  // let messageGreater = a + ' > ' + b + ' ----> ' + resultGreater + '\n' + a + ' >= ' + b + ' ---> ' + resultGreaterEqual + '\n' + a + ' === ' + b + ' --> ' + equalResult + '\n' + a + ' <= ' + b + ' ---> ' + resultLessEqual + '\n' + a + ' < ' + b + ' ----> ' + resultLess;

  function result(a, b) {
    return `${a} > ${b} ----> ${a > b}
${a} >= ${b} ---> ${a >= b}
${a} === ${b} --> ${a === b}
${a} <= ${b} ---> ${a <= b}
${a} < ${b} ----> ${a < b}
`
;
  }

  // --- display the message ---

  displayString('compared', result(a, b));
});
