const IDENTIFY_CONFIG = {
    PROMPT: '9x9 grid OCR. Output 9 rows. Each row MUST contain EXACTLY 9 digits, ending with a newline (\\n). Empty=0. [Matrix]: Scan strictly top-to-bottom. Row1/5/9 are sequential 1-9 series. Rows 2,3,4,6,7,8 must lock the visible printed digits at the exact first and last columns. No spaces, no extra text.',

    MODEL: "gemini-3.1-flash-lite",

    GENERATION: {
        temperature: 0,
        topP: 1,
        maxOutputTokens: 150 // 給換行符號留點空間
    }
};
