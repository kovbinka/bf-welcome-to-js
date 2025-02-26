'use strict';

/* ===== CODE REVIEW =====


  BEHAVIOR:
    TITLE: Frogpedia Input Validator
    DESCRIPTION: The program prompts the user to input something about frogs. It rejects empty/null inputs or strings without 'frog' (case insensitive) and keeps prompting until a valid string with 'frog' is provided, then thanks the user.
    USER STORY: As a user, I want to teach the program about frogs by entering text, and I expect it to keep asking until I provide a string containing 'frog,' ignoring case, so it can thank me for valid input.
    TEST CASES: 
      - "aFrogJumpsFast" → "thank you ..."
      - "ASDFROGHJKL" → "thank you ..."
      - "frogs frog froggily" → "thank you ..."
      - "" → "no frog :(" (prompts again)
      - "frrog" → "no frog :(" (prompts again)
      - "toad" → "no frog :(" (prompts again)

  GOALS:
    NAMES: Names are descriptive (animalName, userInput, isValid, lowerCaseInput, containsTheAnimal), though "searchResult" could be more specific, like "hasFrog."
    PROGRESSION: The code flows logically: initialize variables, loop for valid input, validate, and display a final message. Steps are well-segmented.
    DATA: Input is a string or null, processed into lowercase string and boolean flags, output is a thank-you message with the user’s input.

  COMMENTS:
    "WHY" not "WHAT": Comments mix "what" (e.g., "check if the input contains frog") and some "why" (e.g., implying case insensitivity), but could explain more intent, like why 'frog' is the focus.
    QUANTITY/QUALITY: Comments are plentiful and placed before key blocks, though some could be clearer or more purpose-driven (e.g., why loop until valid?).

  LINTING: Code follows 'use strict' with no glaring style issues. Running ESLint might catch minor things like consistent spacing in comments.

  VARIABLES:
    LOCATION: 
      - animalName: global, at the start.
      - userInput: global, at the start.
      - isValid: global, before the loop.
      - lowerCaseInput: local, inside the loop.
      - searchResult: local, inside the loop.
      - containsTheAnimal: local, inside the loop.
    INITIAL VALUES: 
      - animalName: "frog".
      - userInput: empty string.
      - isValid: false.
      - lowerCaseInput: lowercase user input.
      - searchResult: result of includes().
      - containsTheAnimal: true/false from searchResult.
    ROLES: 
      - animalName: stores the target word to search for.
      - userInput: holds the user’s input.
      - isValid: controls the loop exit condition.
      - lowerCaseInput: temporary lowercase version of input.
      - searchResult: stores the result of the 'frog' check.
      - containsTheAnimal: flags if 'frog' is present.
    DOMAIN: 
      - animalName: string ("frog").
      - userInput: string or null.
      - isValid: boolean.
      - lowerCaseInput: lowercase string.
      - searchResult: boolean.
      - containsTheAnimal: boolean.
    QUANTITY/QUALITY: Reasonable number of variables; quality is good, but some could be scoped tighter (e.g., move loop variables inside).

  LOGS:
    TRACE: No console.log, only prompt and alert for interaction and feedback.
    QUANTITY/QUALITY: Logging is absent, which fits this script, but adding console.log(lowerCaseInput) could help debug edge cases.

  LOGIC:
    OPERATIONS: 
      - toLowerCase() for case-insensitive check.
      - includes() to search for 'frog'.
      - Comparison (===) for null/empty and boolean checks.
      - String concatenation for the final message.
    CONTROL FLOW: 
      - While loop runs until isValid is true.
      - If/continue skips invalid inputs (empty/null).
      - Nested if/else checks for 'frog' and updates isValid or prompts again.
      - Simple, effective flow with clear exit condition.
*/