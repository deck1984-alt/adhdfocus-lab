const IDENTIFY_CONFIG = {
    PROMPT: 'Analyze the Sudoku image. First, list only the filled numbers with their row and column like 'Row1Col1=3, Row1Col2=7' to verify positions. Finally, on the exact same line without any line breaks, colons, or semicolons, output the final 81-digit string where empty cells are 0. Do not use markdown.',

    MODEL: "gemini-2.5-flash",

    GENERATION: {
        temperature: 0,
        topP: 1,
        maxOutputTokens: 5000 
    }
};
