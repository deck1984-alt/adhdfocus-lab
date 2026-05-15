// 辨識邏輯設定
const IDENTIFY_CONFIG = {
    PROMPT: "Here is a condensed, prompt-ready version of your logic that you can wrap in quotes. It focuses on the strict coordinate mapping and the specific output format you requested.
"Act as a high-precision Sudoku OCR parser. Your goal is to map a 9x9 grid into a coordinate-driven data structure.
**Extraction Rules:**
 1. **Grid Geometry:** Divide the image into 9 equal row slots and 9 equal column slots.
 2. **Coordinate Mapping:** Scan every cell by address (R1C1 through R9C9). If a cell is empty or contains only background colors, assign it '0'.
 3. **Logic Gate:** Ignore visual flow; extract strictly by slot address.
 4. **Validation:** Check each 3x3 block, row, and column for number uniqueness (1-9). If a duplicate is detected, re-scan the specific coordinates to fix the alignment.
**Required Output:**
 1. **Block Dump:** List the contents of all nine 3x3 blocks with explicit R/C labels for auditing.
 2. **Final Stream:** Provide a single 81-character string representing the full grid (e.g., 00302...)."
",
    MODEL: "gemini-3.1-flash-lite", // 使用你清單中最穩定的 Lite 模型
    GENERATION: {
        temperature: 0,
        topP: 1,
        maxOutputTokens: 100
    }
};
