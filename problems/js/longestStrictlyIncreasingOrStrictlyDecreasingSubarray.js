/**
 * @param {number[]} nums
 * @return {number}
 */
var longestMonotonicSubarray = function(nums) {
    const defineIncreasing = (n1, n2) => {
        if (n1 === undefined || n1 === n2) {
            return undefined;
        }
        return n1 > n2;
    };
    //debugger;

    if (nums.length === 1) {
        return 1;
    }

    let longestSubarrayLength = 1;
    let count = 1;
    let increasing;
    for (let i = 1; i < nums.length; i++) {
        const prevNum = nums[i - 1];
        const newIncreasingValue = defineIncreasing(prevNum, nums[i]);

        if (newIncreasingValue === undefined) {
            count = 1;
        } else if (increasing !== newIncreasingValue) {
            count = 2;
        } else {
            count++;
        }
        increasing = newIncreasingValue;

        if (count > longestSubarrayLength) { 
            longestSubarrayLength = count;
        }
    }

    return longestSubarrayLength;
};

module.exports = longestMonotonicSubarray;