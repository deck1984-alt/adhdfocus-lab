const IDENTIFY_CONFIG = {
    PROMPT: 'Extract the 81-digit Sudoku string from the main 9x9 grid. Completely ignore any text, newspaper titles, or handwriting outside the grid border. Treat any empty cell as 0, completely ignoring its background color, shadows, highlights, or selection borders. [LOGIC_CONSTRAINT]: For each of the 9 horizontal rows, every non-zero digit (1-9) must appear EXACTLY ONCE. If your visual detection results in duplicate numbers within the same row, that detection is a printing artifact—you must treat that cell as 0. Ensure the final output contains ONLY the 81 digits with absolutely no other text, labels, or explanations.',

    MODEL: "gemini-3.1-flash-lite",

    GENERATION: {
        temperature: 0,
        topP: 1,
        maxOutputTokens: 300 // 保持 300 的彈性空間，讓邏輯防禦線在底層完整跑完
    }
};
