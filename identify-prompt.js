const IDENTIFY_CONFIG = {
    PROMPT: 'Convert this Sudoku image into a single string of 81 numbers. Use 0 for empty squares, from top-left to bottom-right.',

    MODEL: "gemini-2.5-flash",

    GENERATION: {
        temperature: 0,
        topP: 1,
        maxOutputTokens: 5000 
    }
};
