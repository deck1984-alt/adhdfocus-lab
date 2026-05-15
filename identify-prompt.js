const IDENTIFY_CONFIG = {
    PROMPT: "Extract the text. It contains exactly 81 digits total, wrapping across multiple lines. Do not stop at the first line breakdown.",

    MODEL: "gemini-3.1-flash-lite",

    GENERATION: {
        temperature: 0,
        topP: 1,
        maxOutputTokens: 200
    },
};
