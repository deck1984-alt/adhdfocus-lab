const IDENTIFY_CONFIG = {
    PROMPT: "Extract the 81-digit Sudoku string. Treat any empty cell as 0, completely ignoring its background color, highlights, or selection borders. Ensure the final output is exactly 81 digits total, including all wrapped lines.",

    MODEL: "gemini-3.1-flash-lite",

    GENERATION: {
        temperature: 0,
        topP: 1,
        maxOutputTokens: 200
    },
};
