const IDENTIFY_CONFIG = {
    // 拋棄純數字思考，逼它直接輸出帶有固定分隔符的文字方塊（Text Block）
    PROMPT: '9x9 Sudoku OCR. Output ONLY 9 lines. Each line must represent one row. For any clear digit, output that digit. For any empty cell, you MUST output a dot "." (do NOT use spaces). Each line must end with a newline. Absolutely no markdown blocks, no words. Example line format: 7.912345. (must have exactly 9 characters per line including dots).',

    MODEL: "gemini-3.1-flash-lite",

    GENERATION: {
        temperature: 0,
        topP: 1,
        maxOutputTokens: 120 
    }
};
