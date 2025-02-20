import {
  whenFormDataChanges,
  readNumber,
  readString,
  displayString,
} from '../../../../../lib/dom-io/index.js';

whenFormDataChanges('inputs', () => {
  console.log('--- form data changed ---');

  let left = readNumber('left');
  let right = readNumber('right');
  let operator = readString('operator');

  let calculatingResult;

  if (operator === '+') {
    calculatingResult = left + right;
  } else if (operator === '-') {
    calculatingResult = left - right;
  } else if (operator === '*') {
    calculatingResult = left * right;
  } else if (operator === '/') {
    if (right === 0) {
      calculatingResult = 'Error: division by zero';
    } else {
      calculatingResult = left / right;
    }
  } else {
    calculatingResult = 'Invalid operator';
  }

  displayString('result', calculatingResult.toString());
});