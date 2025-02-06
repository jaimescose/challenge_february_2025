const parser = require("./_parser");

const problemSlug = process.argv.at(-1); // Get module name from command-line arguments
if (!problemSlug) {
    throw new Error("Please provide a problem slug. Example: `jest _script.test.js problem-slug`");
}
// convert problem-slug to problemSlug (camelCase)
const moduleName = problemSlug.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
console.log(moduleName);

const problemModule = require(`./${moduleName}`);

const testCasesFilename = `../${problemSlug}`; // Ensure the path to the test cases file is correct
const testCases = parser(testCasesFilename);

test.each(testCases)(`LeetCode problem: ${problemSlug}`, (input, expected) => {
    console.log(input, expected);
    expect(problemModule(input)).toBe(expected);
});