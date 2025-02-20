import {
  whenFormDataChanges,
  readString,
  readBoolean,
  displayString,
} from '../../../../../lib/dom-io/index.js';

whenFormDataChanges('search-input', () => {
  // debugger;
  console.log('--- form data changed ---');

  // --- read the user's input
  const textValue = readString('text');
  const queryValue = readString('query');
  const isCaseSensitive = readBoolean('sensitive');
  let includesQuery = false;

    // --- checking with the case-sensetive
    if (isCaseSensitive) {
    includesQuery = textValue.includes(queryValue);
  } else {
    // --- checking without the case-sensetive
    const lowerText = textValue.toLowerCase();
    const lowerQuery = queryValue.toLowerCase();
    includesQuery = lowerText.includes(lowerQuery);
  }

  // --- results
  if (includesQuery) {
    displayString('search-result',`yes`);
  } else {
    displayString('search-result',`no`);
  }
});
