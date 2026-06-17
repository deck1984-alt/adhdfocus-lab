const IDENTIFY_CONFIG = {
    PROMPT: 'Analyze this Sudoku image carefully. First, write down the numbers as a 9x9 grid (using 0 for empty cells) to double-check that every number is in its exact row and column. Finally, convert that 9x9 grid into a single string of 81 digits.',

    MODEL: "gemini-2.5-flash",

    GENERATION: {
        temperature: 0,
        topP: 1,
        maxOutputTokens: 5000 
    }
};
