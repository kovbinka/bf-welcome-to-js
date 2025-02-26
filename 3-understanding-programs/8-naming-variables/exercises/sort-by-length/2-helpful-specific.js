'use strict';

/* specific

  _a -> _:

*/

alert(
  'enter many strings, they will be sorted by length.\n\n' +
    'when you are done entering strings you can "cancel" or "escape"',
);

let isShort = 'short:';
let isMedium = 'medium:';
let isLong = 'long:';

let isTrue = true;
while (isTrue) {
  let input = prompt('enter something');

  if (input === null) {
    isTrue = false;
  } else if (input.length < 5) {
    isShort = isShort + '\n- "' + input + '"';
  } else if (input.length < 10) {
    isMedium = isMedium + '\n- "' + input + '"';
  } else {
    isLong = isLong + '\n- "' + input + '"';
  }
}

alert(isShort + '\n\n' + isMedium + '\n\n' + isLong);