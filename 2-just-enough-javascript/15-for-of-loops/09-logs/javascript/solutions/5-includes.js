'use strict';

let allowed = 'arvjstcpi';

let jumble = '3j\n _a__v!,aASs woon c023r\n\t&i pPPPPPPPPPt!!?';

for (let char of allowed) {
  if (jumble.includes(char)) {
    console.log(char);
  }
}
