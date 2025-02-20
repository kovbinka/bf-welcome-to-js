import {
  whenFormDataChanges,
  readBoolean,
  displayString,
} from '../../../../../lib/dom-io/index.js';

whenFormDataChanges('user-data', () => {
  // debugger;
  console.log('--- form data changed ---');

  // --- read the user's input ---
  const likesCats = readBoolean('likes-cats');
  const isAlergic = readBoolean('is-allergic');
  const ownsOne = readBoolean('owns-one');
  let message = '';

  // --- generate good advice ---
  if (!likesCats && !isAlergic && !ownsOne){
    message = 'you are doing great';
  } else if (likesCats && isAlergic && ownsOne) {
    message = 'replace your cat with a stuffed animal';
  } else if (likesCats && isAlergic) {
    message = 'make a friend who has a cat';
  } else if (likesCats && ownsOne) {
    message = 'you are doing great';
  } else if (likesCats) {
    message = 'get a cat';
  } else if (isAlergic && ownsOne) {
    message = 'rethink your life choices';
  } else if (isAlergic) {
    message = 'you are doing great'
  } else {
    message = 'you could be doing worse'
  }

  // --- display advice for the user ---
  displayString('custom-advice', message.toString());
});
