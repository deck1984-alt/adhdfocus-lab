const IDENTIFY_CONFIG = {
    PROMPT: 'OCR ONLY the center 9x9 matrix. IGNORE all French text outside. Output 81 digits. Empty=0. [Grid]: 9x9. Each row MUST be EXACTLY 9 chars. [Border Lock]: Rows 2,3,4,6,7,8: 1st and 9th chars CANNOT be 0; lock them to the printed digits on the borders. Count intermediate 0s strictly to bridge borders. No spaces, no wrappers.',

    MODEL: "gemini-3.1-flash-lite",

    GENERATION: {
        temperature: 0,
        topP: 1,
        maxOutputTokens: 120 // 稍微放寬到 120，給大圖留下一點自迴歸解碼的尾巴緩衝空間
    }
};
