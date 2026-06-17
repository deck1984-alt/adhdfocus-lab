const IDENTIFY_CONFIG = {
    PROMPT: 'Convert the 9x9 Sudoku image into exactly 9 lines of text. 

Rules:
- Row 1 starts with "A", Row 2 with "B", ..., Row 9 with "I".
- Each letter is followed by exactly 9 numbers (0 for empty cells).
- The blue block is just an empty cell, represent it as 0.
- Output ONLY the 9 lines. No markdown, no wrappers, no extra text.

Example:
A378200000
B000000009
C000700500
D001070006
E700860000
F030100002
G000000690
H204090000
I000000800
',

    MODEL: "gemini-2.5-flash",

    GENERATION: {
        temperature: 0,
        topP: 1,
        maxOutputTokens: 5000 
    }
};
