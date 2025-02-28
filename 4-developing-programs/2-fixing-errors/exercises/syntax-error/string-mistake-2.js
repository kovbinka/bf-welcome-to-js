'use strict';

/*
  environment: Chrome

  name: SyntaxError
  message: Unexpected identifier

  callstack: 
    - Uncaught SyntaxError: Unexpected identifier (at script.js:16:34)

  life cycle: Parsing phase (the error occurs during syntax validation before the code can execute)

  the mistake: The string assigned to "innerHtml" attempts to include the variable "anchorName" directly within the string literal without proper concatenation or interpolation. In JavaScript, variables cannot be embedded in a regular string (with single or double quotes) without using a concatenation operator (+) or template literals.

  the fix(es):
    1. Use string concatenation with the + operator to include the variable:
       const anchorName = '#Home';
       const innerHtml = "<p>Click here to <a href='" + anchorName + "'>go home</a></p>";
    2. Use template literals (backticks) for easier variable interpolation:
       const anchorName = '#Home';
       const innerHtml = `<p>Click here to <a href="${anchorName}">go home</a></p>`;
*/

const anchorName = '#Home';

const innerHtml = "<p>Click here to <a href="anchorName">go home</a></p>";