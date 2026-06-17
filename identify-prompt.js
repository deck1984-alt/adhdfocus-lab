const IDENTIFY_CONFIG = {
    PROMPT: 'Locate the Sudoku board in the image and return JSON with one key grid containing exactly 81 digits in row major order, use 0 for empty cells, read each cell individually, do not solve, do not guess, do not merge or split digits, do not add any extra text',

    MODEL: "gemini-2.5-flash",

    GENERATION: {
        temperature: 0,
        thinkingBudget: 0,
        topP: 1,
        maxOutputTokens: 5000 
    }
};
