const IDENTIFY_CONFIG = {
    PROMPT: 'You are given an image of a Sudoku puzzle.Task: Extract the puzzle as an 81-digit string in row-major order.- Read each row from left to right, top to bottom.- Return digits 1-9 for filled cells.- Return 0 for blank cells.- Output only the final 81-digit string.- Do not add markdown, labels, spaces, or commentary.- Do not solve the Sudoku; only transcribe the grid.',

    MODEL: "gemini-2.5-flash",

    GENERATION: {
        temperature: 0,
        topP: 1,
        maxOutputTokens: 5000 
    }
};
