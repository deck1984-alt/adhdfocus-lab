// 辨識邏輯設定
const IDENTIFY_CONFIG = {
    PROMPT: "GEOMETRIC ANCHORING AND COORDINATE MAPPING
Define nine equal column slots and nine equal row slots based on grid dimensions. Every cell must be locked to a specific coordinate from R1C1 to R9C9. The system processes the grid by slot address rather than visual flow to ensure spatial accuracy.
OPTICAL CHARACTER RECOGNITION PROTOCOL
Scan each slot address in top to bottom and left to right order. If a slot contains only background pixels or is empty return zero. Ignore specific hex color codes including blue and transparent white overlays. Every cell is mapped strictly to its row and column identity.
### BLOCK INTEGRITY AND DATA VALIDATION
Organize data into nine three by three arrays to maintain block integrity. Perform a uniqueness check for digits one through nine within every row column and three by three block. If a duplicate is detected the system must re scan the conflicting coordinates and verify alignment with neighboring slots.
OUTPUT REQUIREMENTS
Provide a block dump showing each three by three section with explicit row and column coordinates for auditing. Generate a final stream consisting of an eighty one character continuous string of digits including zeros for empty cells.",

    MODEL: "gemini-3.1-flash-lite",

    GENERATION: {
        temperature: 0,
        topP: 1,
        maxOutputTokens: 100
    },
};
