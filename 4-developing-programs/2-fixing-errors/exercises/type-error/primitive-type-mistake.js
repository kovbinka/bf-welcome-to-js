'use strict';

/*
  environment: Chrome

  name: TypeError
  message: Cannot read properties of null (reading 'length')

  callstack: 
    - Uncaught TypeError: Cannot read properties of null (reading 'length') (at script.js:16:13)

  life cycle: Execution phase (the error occurs when the code attempts to access a property during runtime)

  the mistake: The code tries to access the "length" property of "userInput", which is set to "null". In JavaScript, "null" is a primitive value that represents the absence of an object, and it does not have properties like "length", causing a TypeError.

  the fix(es):
    1. Check if "userInput" is not null before accessing its "length" property:
       const userInput = null;
       if (userInput !== null) {
         console.log(userInput.length);
       }
    2. Assign a valid value (like a string) to "userInput" if the intent was to use "length":
       const userInput = 'hello';
       console.log(userInput.length);
    3. Use optional chaining to safely access "length" without throwing an error:
       const userInput = null;
       console.log(userInput?.length);
*/

const userInput = null;

console.log(userInput.length);