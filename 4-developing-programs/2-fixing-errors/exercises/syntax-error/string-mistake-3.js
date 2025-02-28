'use strict';

/*
  environment: Chrome

  name: SyntaxError
  message: Unterminated string literal

  callstack: 
    - Uncaught SyntaxError: Unterminated string literal (at script.js:15:24)

  life cycle: Parsing phase (the error occurs during syntax validation before the code can execute)

  the mistake: The string assigned to "quotesInQuotes" uses single quotes and includes unescaped single quotes (''i can do this!'') within it, causing the string to terminate prematurely. In JavaScript, single quotes within a single-quoted string must be escaped with a backslash (\), or the string must use a different quote type (double quotes or template literals).

  the fix(es):
    1. Escape the inner single quotes with backslashes:
       const quotesInQuotes = 'remind yourself \'i can do this!\' at least once a day';
    2. Use double quotes for the outer string to avoid escaping single quotes:
       const quotesInQuotes = "remind yourself 'i can do this!' at least once a day";
    3. Use template literals (backticks) for clarity and flexibility:
       const quotesInQuotes = `remind yourself 'i can do this!' at least once a day`;
*/

const quotesInQuotes = 'remind yourself ''i can do this!'' at least once a day';