const IDENTIFY_CONFIG = {
    PROMPT: '9x9 grid OCR. Output ONLY 81 digits. Empty=0. [Grid]: 9 rows, 9 cols. Scan top-to-bottom, left-to-right. Each row MUST have EXACTLY 9 digits. [Align]: Col(N) of Row(2-9) MUST vertically align with Col(N) of Row(1). Count blanks strictly to maintain vertical matrix lines. [Constraint]: Row uniqueness (1-9). If duplication occurs, favor printed digit or force blank to 0. No wrapper, no text, no spaces.',

    MODEL: "gemini-3.1-flash-lite",

    GENERATION: {
        temperature: 0,
        topP: 1,
        maxOutputTokens: 100 // 既然它被壓縮到極致且只能直出81碼，100 Token 空間就絕對夠用，不會講廢話
    }
};
