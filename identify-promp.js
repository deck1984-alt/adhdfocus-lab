// 模擬環境變數與 Prompt 封裝
const IDENTIFY_CONFIG = {
    // 這裡放你的 Prompt 範本
    PROMPT: "Sudoku Multi-Stage Processing Prompt (Full Workflow Automation)
​[IMPORTANT: Do not generate the final sequence immediately. This is a multi-step task.]
​Input: A 9x9 Sudoku image with 0-9 digits and empty cells.
​Your Role: You are an automated image-to-data conversion pipeline. Your goal is to extract the Sudoku grid into a single 81-digit string with 100% precision. Because direct extraction from the full image is prone to misalignment (the 'counting zeros' hallucination), you must execute the following multi-step workflow.
​Stage 1: Image Pre-processing (Analytical Simulation)
​Your first task is to mentally simulate image pre-processing to isolate the data. Since you are an LLM, represent these visual transforms analytically.
​Grid Localization: Analyze the input image to find the four extreme corners of the main 9x9 grid.
​[ACTION: Perform Perspective Transform]
​Normalization: Conceptually warp and rectify the grid image so it becomes a perfect, square 9x9 grid, eliminating phone screen skew or rotation.
​Sub-grid Cropping (9x): Dice this rectified image into exactly 9 equal-sized sub-images, corresponding to the nine 3x3 blocks.
​Name them conceptually: Block_1x1 (Top-Left), Block_1x2 (Top-Center), ... Block_3x3 (Bottom-Right).
​Stage 2: Localized OCR (9 Discrete Queries)
​You must now analyze each of the nine conceptual cropped sub-images INDIVIDUALLY. Analyze only the data contained within each conceptual sub-image. Represent empty cells as '0'.
​Execute and output the 3x3 results in matrix format:
​Result 1 (Top-Left 3x3): 0,0,0 / 0,9,0 / 0,7,8
​Result 2 (Top-Center 3x3): 0,5,9 / 7,6,0 / 0,0,0
​Result 3 (Top-Right 3x3): 0,0,0 / 0,0,1 / 9,0,0
​Result 4 (Mid-Left 3x3): 3,0,0 / 9,1,0 / 0,0,0
​Result 5 (Mid-Center 3x3): 0,9,6 / 0,0,0 / 1,8,0
​Result 6 (Mid-Right 3x3): 0,0,0 / 2,8,0 / 0,0,9
​Result 7 (Bottom-Left 3x3): 0,2,0 / 5,0,0 / 0,0,0
​Result 8 (Bottom-Center 3x3): 0,0,0 / 2,7,0 / 6,1,0
​Result 9 (Bottom-Right 3x3): 8,7,0 / 0,6,0 / 0,0,0
​Stage 3: Synthesis and Code-Based Validation
​You must now rebuild the full 9x9 matrix from the validated 3x3 block data and perform multiple checks.
​Reconstruction: Combine the 3x3 results row-by-row to reconstruct the full grid.
​Pre-computation Validation (LLM Internal Check):
​Check 1: Length Verification -> (81 digits? Yes/No)
​Check 2: Sudoku Integrity Check -> (Scan every Row, Column, and 3x3 sub-grid for duplicate numbers. Are there violations? Yes/No)
​Stage 4: Final Accurate Sequence (Output)
​If all validation checks in Stage 3 pass with 100% confidence, output the final sequence as a pure, concatenated number string.",
    
    // 也可以順便把模型名稱包進來，方便以後一次改
    MODEL_NAME: "gemini-3.1-flash-lite",
    
    // 生成參數
    GENERATION_CONFIG: {
        temperature: 0.1,
        topP: 1,
        maxOutputTokens: 100
    }
};
