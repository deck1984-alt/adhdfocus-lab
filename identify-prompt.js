const IDENTIFY_CONFIG = {
    PROMPT: 'Focus only on the 9x9 Sudoku grid area in the image
Do not read any numbers outside the grid such as system time or battery percentage or title text

First write down the result as a 9x9 matrix using 0 for empty cells to ensure alignment
Then output the final answer as a single string of 81 digits only

Double check that your final string has exactly 81 characters',

    MODEL: "gemini-2.5-flash",

    GENERATION: {
        temperature: 0,
        topP: 1,
        maxOutputTokens: 5000 
    }
};
