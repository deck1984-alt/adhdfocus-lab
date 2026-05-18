const IDENTIFY_CONFIG = {
    PROMPT: 'Focus strictly on the visual content inside each individual cell grid. Extract the 81-digit Sudoku string from the main 9x9 grid. Completely ignore any text outside the border. Treat any empty cell as 0, ignoring highlights or shadows. [GRID_STRUCTURE]: You must scan strictly row by row, from top to bottom, left to right. Each row must contain EXACTLY 9 digits. Do not skip the first or last column of any row. [LOGIC_CONSTRAINT]: For each row, every non-zero digit (1-9) must appear exactly once. If a digit seems to violate this, or if a cell is uncertain, favor the clear printed digit or treat the true blank as 0. Ensure the final output contains ONLY the 81 digits with absolutely no other text.',

    MODEL: "gemini-3.1-flash-lite",

    GENERATION: {
        temperature: 0,
        topP: 1,
        maxOutputTokens: 300 // 保持 300 的彈性空間，讓邏輯防禦線在底層完整跑完
    }
};
