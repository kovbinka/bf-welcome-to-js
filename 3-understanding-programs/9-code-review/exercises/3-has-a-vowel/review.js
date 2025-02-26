'use strict';

/* ===== CODE REVIEW =====


  BEHAVIOR:
    TITLE: Vowel Checker
    DESCRIPTION: The program prompts the user for text and checks if it contains at least one vowel (a, e, i, o, u, case insensitive). It then alerts the user with the result.
    USER STORY: As a user, I want to input text and have the program tell me if it contains any vowels so I can know if my text meets that condition.
    TEST CASES: 
      - "hello" → "has at least one vowel"
      - "HELLO" → "has at least one vowel"
      - "rhythm" → "has no vowels"
      - "aeiou" → "has at least one vowel"
      - "" → "has no vowels"
      - "123" → "has no vowels"

  GOALS:
    NAMES: Variable names are mostly clear (characters, vowels, hasAVowel, message), though "characters" could be more specific like "userText."
    PROGRESSION: Code progresses logically: get input, define vowels, check for vowels, and display the result. Steps are separated by comments.
    DATA: Input is a string or null, processed into a boolean flag, output is an alert with a message.

  COMMENTS:
    "WHY" not "WHAT": Comments mostly describe "what" (e.g., "find vowels in the string") rather than "why" (e.g., "we loop to check each character for efficiency"). More intent could be added.
    QUANTITY/QUALITY: Comments are present for each section, but they’re basic and could explain purpose better (e.g., why break after finding a vowel?).

  LINTING: Code uses 'use strict' and is mostly clean. Minor issues: mix of var/let/const (inconsistent), suggest ESLint for style consistency.

  VARIABLES:
    LOCATION: 
      - characters: global, at the start.
      - vowels: global, in vowel definition block.
      - hasAVowel: global, in vowel checking block.
      - message: global, in message block.
      - char: local, within for-of loop.
    INITIAL VALUES: 
      - characters: null.
      - vowels: "aeiouAEIOU".
      - hasAVowel: false.
      - message: empty string.
      - char: each character from characters string.
    ROLES: 
      - characters: stores user input.
      - vowels: holds the reference string of vowels.
      - hasAVowel: flags if a vowel is found.
      - message: placeholder for the message (unused in final alert).
      - char: iterates over input characters.
    DOMAIN: 
      - characters: string or null.
      - vowels: string of vowels.
      - hasAVowel: boolean.
      - message: string (empty, unused).
      - char: single character from input.
    QUANTITY/QUALITY: Few variables, decent quality, but "message" is declared and unused; var/let/const usage is inconsistent.

  LOGS:
    TRACE: No console.log, only prompt and alert for interaction.
    QUANTITY/QUALITY: No logging, which is fine for this task, but console.log(char) in the loop could help trace vowel checks.

  LOGIC:
    OPERATIONS: 
      - includes() to check if a character is a vowel.
      - String concatenation for the alert message.
    CONTROL FLOW: 
      - While loop ensures non-null input, with a break to exit on valid input (logic feels redundant with the if).
      - For-of loop iterates over characters, breaking on first vowel or continuing otherwise.
      - If/else decides the final message based on hasAVowel.
      - Flow is straightforward but has minor inefficiencies (e.g., nested break in while).
*/