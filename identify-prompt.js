const IDENTIFY_CONFIG = {
    PROMPT: 'Focus strictly on the 9x9 cell grid. Extract the 81-digit Sudoku string from the main 9x9 grid. Completely ignore any text outside the border. Treat any empty cell as 0, ignoring highlights or shadows. [GRID_STRUCTURE]: Scan strictly row by row, from top to bottom. Each row must contain EXACTLY 9 digits. [ALIGNMENT_RULE]: To prevent horizontal shifting, alignment is key—the N-th digit of the current row must align perfectly with the vertical column of the N-th digit of the first row. Count the blank spaces (0s) carefully to match this 9x9 vertical alignment. [LOGIC_CONSTRAINT]: For each row, every non-zero digit (1-9) must appear exactly once. If a cell is uncertain, favor the clear printed digit or treat the true blank as 0. Ensure the final output contains ONLY the 81 digits with absolutely no other text.',

    MODEL: "gemini-3.1-flash-lite",

    GENERATION: {
        temperature: 0,
        topP: 1,
        maxOutputTokens: 300 
    }
};
