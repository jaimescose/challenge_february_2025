/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isArraySpecial = function(nums) {
    if (nums.length < 2){
        return true;
    }

    let temp;
    let numEven = nums[0] % 2 === 0;
    for (let i = 1; i < nums.length; i++) {
        temp = nums[i] % 2 === 0;
        if (temp === numEven) {
            return false;
        }

        numEven = temp;
    }
    return true;
};

module.exports = isArraySpecial;