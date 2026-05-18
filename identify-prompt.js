const IDENTIFY_CONFIG = {
    // 改用點 "." 當作強烈視覺像素，強迫逐行換行，徹底拉開空間
    PROMPT: '9x9 Sudoku grid OCR. Scan strictly row by row, top to bottom. Output EXACTLY 9 lines. Each line MUST contain exactly 9 characters including numbers and dots. For any empty cell, output a dot "." (do not use spaces or underscores). End each line with a newline (\\n). No words, no markdown blocks, just the 9x9 text block.',

    MODEL: "gemini-3.1-flash-lite",

    GENERATION: {
        temperature: 0,
        topP: 1,
        maxOutputTokens: 120 
    }
};
