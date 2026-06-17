const IDENTIFY_CONFIG = {
    PROMPT: 'Ignore all previous logic and ignore any past cache because this is a completely brand new puzzle image so you must scan it fresh. Scan the 9x9 Sudoku puzzle from top-left to bottom-right cell by cell and carefully verify the exact position of every single visible digit. Count exactly 81 numbers in total and use the number 0 for every empty cell. Output only the final single continuous string of 81 digits without any newlines or other characters.',

    MODEL: "gemini-2.5-flash",

    GENERATION: {
        temperature: 0,
        topP: 1,
        maxOutputTokens: 5000 
    }
};
