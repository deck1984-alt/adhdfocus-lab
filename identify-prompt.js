const IDENTIFY_CONFIG = {
    PROMPT: 'Task, Extract numbers from this 9x9 Sudoku image into a text string.
​Rules,
​The output MUST be EXACTLY 81 digits long. No more, no less.
​Use 0 for empty cells.
​Do NOT hallucinate extra digits at the beginning (e.g., do NOT start with 1990). The first row clearly starts with 3, 7, 8, 2...
​To ensure 100% accuracy, please follow these steps before giving the final answer.
​Step 1, List the numbers row by row, explicitly marking the columns (e.g., Row 1: Col1=3, Col2=7, Col3=8, Col4=2, Col5=0, Col6=0, Col7=0, Col8=0, Col9=0).
​Step 2, Double-check if the total number of digits is exactly 81.
​Step 3, Finally, output ONLY the 81-digit string.',

    MODEL: "gemini-2.5-flash",

    GENERATION: {
        temperature: 0,
        topP: 1,
        maxOutputTokens: 5000 
    }
};
