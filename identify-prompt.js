const IDENTIFY_CONFIG = {
    // 拋棄所有 Row 1-9 不重複的邏輯限制，只做純視覺符號填空
    PROMPT: '9x9 Sudoku OCR. Scan top-to-bottom. Output EXACTLY 81 characters in total. For any clear printed digit, output that digit. For any empty blank cell, you MUST output an underscore "_" (do NOT use spaces). Never output 0. Example style: 7891234563___4___85___9___1... Ensure the final output is exactly 81 characters.',

    MODEL: "gemini-3.1-flash-lite",

    GENERATION: {
        temperature: 0,
        topP: 1,
        maxOutputTokens: 120 
    }
};
