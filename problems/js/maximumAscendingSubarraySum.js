/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAscendingSum = function(nums) {
    let maxSum = nums[0];
    let sum = nums[0];
    for (i = 1; i < nums.length; i++) {
        if (nums[i] > nums[i - 1]) {
            sum += nums[i];
        } else {
            sum = nums[i];
        }
        maxSum = Math.max(maxSum, sum);
    }

    return maxSum;
};

module.exports = maxAscendingSum;