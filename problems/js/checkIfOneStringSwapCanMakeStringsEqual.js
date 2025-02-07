/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var areAlmostEqual = function(s1, s2) {
    let swapping1 = [];
    let swapping2 = [];

    if (s1 === s2) {
        return true;
    }

    for (i = 0; i < s1.length; i++) {
        const l1 = s1[i];
        const l2 = s2[i];

        if (l1 !== l2) {
            if (swapping1.length === 2) {
                return false;
            } else if (swapping1.length === 1) {
                if (swapping1.includes(l2) && swapping2.includes(l1)) {
                    swapping1.push(l1);
                    swapping2.push(l2);
                } else {
                    return false;
                }
            } else {
                swapping1.push(l1);
                swapping2.push(l2);
            }
        }
    }

    return swapping1.length === 2 || swapping1.length === 0;
};

module.exports = areAlmostEqual;