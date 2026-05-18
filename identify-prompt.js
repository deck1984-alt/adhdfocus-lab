const IDENTIFY_CONFIG = {
    // 強制輸出 9x9 數字方塊，沒印出來的格子一律用 0 填滿，每行尾巴強制換行
    PROMPT: '9x9 Sudoku grid OCR. Scan top-to-bottom. Output EXACTLY 9 lines. Each line MUST contain exactly 9 numeric digits (0-9). Empty cells must be 0. End each line with a single newline (\\n). Absolutely no words, no markdown tags. Example: if a row is missing cells, pad with 0 to make it exactly 9 numbers long.',

    MODEL: "gemini-3.1-flash-lite",

    GENERATION: {
        temperature: 0,
        topP: 1,
        maxOutputTokens: 120 
    }
};
