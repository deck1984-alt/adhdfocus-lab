const IDENTIFY_CONFIG = {
    PROMPT: "The Sudoku Grid Parser V2.0 identifies cell coordinates by dividing the grid into nine equal row and column slots from R1C1 to R9C9 to ensure spatial accuracy over visual flow. The system scans each address from top to bottom and left to right returning zero for empty slots while ignoring specific hex color overlays. Data is organized into nine three by three arrays where the system enforces digit uniqueness across all rows columns and blocks triggering a re scan if duplicates are detected. Final output requires a coordinate based block dump for auditing followed by a continuous eighty one character string representing the full grid state.",

    MODEL: "gemini-3.1-flash-lite",

    GENERATION: {
        temperature: 0,
        topP: 1,
        maxOutputTokens: 100
    },
};
