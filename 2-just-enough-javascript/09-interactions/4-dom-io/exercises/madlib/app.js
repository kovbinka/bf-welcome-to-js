// these are the only functions you will need
import {
  whenFormDataChanges,
  readString,
  displayString,
} from '../../../../../lib/dom-io/index.js';

whenFormDataChanges('user-words', () => {
  // debugger;
  console.log('\n--- form data changed ---');

  // --- read user input ---

  let noun = readString('noun');
  let verb = readString('verb');
  let adjective = readString('adjective');

  // --- create a funny sentence ---

  let displayResult = 'On ' + adjective + ' days the ' + noun + ' will always ' + verb + '.';


  // --- display the sentence ---
  displayString('funny-sentence', displayResult);
});
