const IDENTIFY_CONFIG = {
    PROMPT: 'Transcribe this 9x9 Sudoku puzzle row by row, from top to bottom. For each row, write out the 9 numbers from left to right, using 0 for empty cells. Double-check your grid alignment to ensure every number is in its exact correct position.',

    MODEL: "gemini-2.5-flash",

    GENERATION: {
        temperature: 0,
        topP: 1,
        maxOutputTokens: 5000 
    }
};
