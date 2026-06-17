const IDENTIFY_CONFIG = {
    PROMPT: 'Strictly analyze this 9x9 Sudoku image row by row. First find all 81 cells from top-left to bottom-right. If a cell is empty you must represent it as an X character. If a cell contains a number you must output that exact number. After mapping all 81 positions replace every X character with a 0 and output only the final single string of 81 numbers without any text explanation',

    MODEL: "gemini-2.5-flash",

    GENERATION: {
        temperature: 0,
        topP: 1,
        maxOutputTokens: 5000 
    }
};
