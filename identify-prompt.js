const IDENTIFY_CONFIG = {
    PROMPT: 'You are an expert Sudoku OCR assistant. 
Your task is to convert the 9x9 Sudoku grid image into exactly 9 lines of structured text.

[RULES]
1. Output EXACTLY 9 lines. No conversational filler, no markdown wrappers (do not use \`\`\`), no extra text.
2. Row 1 must start with "A", Row 2 with "B", ..., up to Row 9 with "I".
3. Each letter must be immediately followed by exactly 9 numbers representing the row from left to right.
4. Use '0' for any empty cell.
5. IMPORTANT: You might see a blue highlighted cell (e.g., the selected cursor). Treat it as a normal cell. If it is empty inside, represent it as '0'.

[EXAMPLE OUTPUT FORMAT]
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
