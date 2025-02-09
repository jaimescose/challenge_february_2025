/**
 * @param {number[]} nums
 * @return {number}
 */
var tupleSameProduct = function(nums) {
    if (nums.length < 4) {
        return 0;
    }

    let products = {};
    //debugger;
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            const product = nums[i] * nums[j];

            if (products.hasOwnProperty(product)) {
                products[product] += 1;
            } else {
                products[product] = 1;
            }
        }
    }

    let count = 0;
    Object.values(products).forEach(freq => {
        if (freq > 1) {
            count += freq * (freq - 1) / 2 * 8
        }
    });

    return count;
};

var tupleSameProductOptimized = function(nums) {
    let productCount = new Map(), result = 0;

    for (let i = 0; i < nums.length; i++)
        for (let j = i+1; j < nums.length; j++) {
            let product = nums[i] * nums[j];
            result += 8 * (productCount.get(product) || 0);
            productCount.set(product, (productCount.get(product) || 0) + 1);
        }

    return result;
};

module.exports = tupleSameProduct;