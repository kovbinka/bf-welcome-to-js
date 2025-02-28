'use strict';

/*
  environment: Chrome

  name: SyntaxError
  message: Unterminated string literal

  callstack: 
    - Uncaught SyntaxError: Unterminated string literal (at script.js:15:11)

  life cycle: Parsing phase (the error occurs during syntax validation before the code can execute)

  the mistake: The string assigned to "const a" is split across two lines without proper termination or continuation. In JavaScript, a string literal must either be completed on one line or use a backslash (\) to continue across multiple lines, otherwise it’s considered unterminated.

  the fix(es):
    1. Put the string on a single line with proper termination:
       const a = 'this is two lines';
    2. Use a backslash to explicitly continue the string across lines:
       const a = 'this is \
two lines';
    3. Use a template literal (backticks) to allow natural multi-line strings:
       const a = `this is
two lines`;
*/

const a = 'this is
two lines';