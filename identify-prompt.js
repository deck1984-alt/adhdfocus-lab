const IDENTIFY_CONFIG = {
    PROMPT: '9x9 Sudoku OCR. Output EXACTLY 9 lines. Row 1 starts with "A", Row 2 starts with "B", up to Row 9 starting with "I". Each letter must be followed by exactly 9 numbers (0 for empty). End with newline. Example: A789123456\\nB300040008\\n... No wrapper, no text. If see blue block, it just like a normal block. Check again before output, if the result does not match the original image, calculate it again.',

    MODEL: "gemini-3.5-flash",

    GENERATION: {
        temperature: 0,
        topP: 1,
        maxOutputTokens: 5000 
    }
};
