// 辨識邏輯設定
const IDENTIFY_CONFIG = {
    PROMPT: "81 digits pure number in a row",
    MODEL: "gemini-3.1-flash-lite", // 使用你清單中最穩定的 Lite 模型
    GENERATION: {
        temperature: 0,
        topP: 1,
        maxOutputTokens: 100
    }
};
