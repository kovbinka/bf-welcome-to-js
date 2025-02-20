'use strict';

/*


  Data In:

  Data Out:

  Test Cases:

*/

/* ---   ?   --- */

// input <- null

let input = null;

while (input === null){
  input = prompt('enter some text');
}
// WHILE: input === null
//   input <- prompt('enter some text')
// :END WHILE

// repeated <- ''
let repeated = '';
// i <- 0
let i = 0;
while (i < input.length){
  repeated = repeated + '\n' + input;
  i = i + 1;
}

alert(repeated);
// WHILE: i < input.length
//   repeated <- repeated + '\n' + input
//   i <- i + 1
// :END WHILE

/* ---   ?   --- */

// alert(repeated)
