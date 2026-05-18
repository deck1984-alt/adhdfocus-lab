const IDENTIFY_CONFIG = {
    PROMPT: '9x9 grid OCR. Output ONLY 81 digits, no spaces. Empty=0. [Grid]: 9 rows, 9 cols. Scan strictly top-to-bottom. Each row MUST contain EXACTLY 9 characters. [Border Lock]: For Rows 2,3,4,6,7,8, the 1st character and the 9th character MUST be the printed digits visible on the left/right edges (Do NOT output 0 for borders). Count intermediate empty cells as 0 to fit exactly between these two border digits. No explanation, just 81 digits.',

    MODEL: "gemini-3.1-flash-lite",

    GENERATION: {
        temperature: 0,
        topP: 1,
        maxOutputTokens: 120 // 保持極低Token消耗
    }
};
