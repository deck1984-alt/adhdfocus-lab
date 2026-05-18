const IDENTIFY_CONFIG = {
    // 讓每一行都有英文字母開頭（A-I），強迫它對齊，尾巴補滿 9 個數字（含0）
    PROMPT: '9x9 Sudoku OCR. Output EXACTLY 9 lines. Row 1 starts with "A", Row 2 starts with "B", up to Row 9 starting with "I". Each letter must be followed by exactly 9 numbers (0 for empty). End with newline. Example: A789123456\\nB300040008\\n... No wrapper, no text.',

    MODEL: "gemini-3.1-flash-lite",

    GENERATION: {
        temperature: 0,
        topP: 1,
        maxOutputTokens: 150 
    }
};
