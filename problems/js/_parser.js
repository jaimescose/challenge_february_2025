const fs = require('fs');

function parseTestCases(filename) {
    const data = fs.readFileSync(filename, 'utf8').trim().split('\n');
    return data.map(line => {
        let [input, output] = line.split('|').map(e => e.trim());
        input = input.split(',').map(Number);
        if (output === 'true') {
            output = true;
        } else if (output === 'false') {
            output = false;
        } else {
            output = Number(output);
        }
        return [input, output];
    });
}

module.exports = parseTestCases;