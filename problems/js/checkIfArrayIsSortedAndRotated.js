/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function(nums) {
    let maxNum = 0;
    let prevNum = 101;
    let i = nums.length - 1;
    while (i >= 0 && prevNum >= nums[i]) {
        const currentNum = nums[i];
        if (currentNum > maxNum) {
            maxNum = currentNum;
        }

        prevNum = currentNum;
        i--;
    }

    if (i < 0) {
        return true;
    }

    if (maxNum > nums[i]) {
        return false;
    }

    for (i = i - 1; i >= 0; i--) {
        if (nums[i] > nums[i + 1] || maxNum > nums[i]) {
            return false;
        }
    }

    return true;
};

module.exports = check;