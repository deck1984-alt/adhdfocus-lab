const IDENTIFY_CONFIG = {
    PROMPT: 'Extract the 81-digit Sudoku string from the main 9x9 grid. Completely ignore any text, newspaper titles, or handwriting outside the grid border. Treat any empty cell as 0, completely ignoring its background color, shadows, highlights, or selection borders. Ensure the final output contains ONLY the 81 digits with absolutely no other text, labels, or explanations.',

    MODEL: "gemini-3.1-flash-lite",

    GENERATION: {
        temperature: 0,
        topP: 1,
        maxOutputTokens: 160 // 保持你最舒服的偶數設定，給予足夠的 81 碼輸出空間
    }
};
