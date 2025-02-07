const fs = require("fs");

const problemSlug = process.argv.at(-1); // Get module name from command-line arguments
if (!problemSlug) {
    throw new Error("Please provide a problem slug. Example: `jest _script.test.js problem-slug`");
}

// Convert problem-slug to camelCase
const moduleName = problemSlug.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
const problemModule = require(`./${moduleName}`);

// Read JSON test cases file
const testCasesFilename = `../${problemSlug}.json`;
if (!fs.existsSync(testCasesFilename)) {
    throw new Error(`Test cases file not found: ${testCasesFilename}`);
}

// Parse JSON test cases
const testCases = JSON.parse(fs.readFileSync(testCasesFilename, "utf8"));

test.each(testCases)(`LeetCode problem: ${problemSlug}`, ({ input, expected, inputs }) => {
    // Determine how to pass the arguments
    const args = inputs === 1 ? [input] : input;

    console.log("Testing:", args, "Expected:", expected);
    expect(problemModule(...args)).toBe(expected);
});
