'use strict';

/* ===== CODE REVIEW =====


  BEHAVIOR:
    TITLE: Check for an "Excited" String
    DESCRIPTION: The program prompts the user for a string, ignores trailing whitespace, and checks if it ends with an exclamation mark ('!'). It then displays a message indicating whether the string is "excited" or not.
    USER STORY: As a user, I want to input text so the program can tell me if it ends with an exclamation mark, even if there’s trailing whitespace, to determine if my input is "excited."
    TEST CASES: 
      - "asdf!" → "excited"
      - "asdf! " → "excited"
      - "!!!      " → "excited"
      - "!" → "excited"
      - '"!"' → "excited"
      - "asdf" → "not excited"
      - "asdf? " → "not excited"
      - "!!!    ?  " → "not excited"
      - "" → "not excited"

  GOALS:
    NAMES: Variable names are clear (input, trimmedInput, isExcited, message), but could be more descriptive, e.g., "userInput" instead of "input."
    PROGRESSION: The code logically progresses from input collection to processing and output. Steps are clearly separated by comments.
    DATA: Input is a user-provided string, intermediate data includes a trimmed string and a boolean, output is a message string.

  COMMENTS:
    "WHY" not "WHAT": Comments focus more on "what" (e.g., "check if the string is excited") rather than "why" (e.g., "we check the last character to ignore trailing spaces"). More intent could be added.
    QUANTITY/QUALITY: Comments are present before each block, but their quality could improve with more context (e.g., why use trimEnd instead of trim?).

  LINTING: Code adheres to 'use strict' standards, no obvious style issues. Suggest running ESLint for minor details (e.g., comment indentation).

  VARIABLES:
    LOCATION: 
      - input: global, declared at the start.
      - trimmedInput: global, in the checking block.
      - isExcited: global, in the checking block.
      - message: global, in the message construction block.
    INITIAL VALUES: 
      - input: null (for the loop).
      - trimmedInput: trimmed string.
      - isExcited: boolean from comparison.
      - message: empty string.
    ROLES: 
      - input: holds user input.
      - trimmedInput: stores the whitespace-trimmed string.
      - isExcited: indicates the result of the check.
      - message: builds the final message.
    DOMAIN: 
      - input: any string or null.
      - trimmedInput: string without trailing whitespace.
      - isExcited: true/false.
      - message: string with a message.
    QUANTITY/QUALITY: Few variables, good quality, but all are global — scope could be restricted.

  LOGS:
    TRACE: No console.log, only prompt and alert for user interaction.
    QUANTITY/QUALITY: No logging, which is fine for this simple script, but console.log(trimmedInput) could aid debugging.

  LOGIC:
    OPERATIONS: 
      - trimEnd() to remove trailing whitespace.
      - Access the last character via [length - 1].
      - Comparison with '!'.
      - String concatenation for the message.
    CONTROL FLOW: 
      - While loop ensures string input (though "string" type check with null is questionable).
      - If/else determines excitement.
      - Structure is simple and linear.
*/