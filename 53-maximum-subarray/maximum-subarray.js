/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
 let arrSums = [nums[0]];
    let intMax = nums[0];

    for (let i = 1; i < nums.length; i++) {
        const intSum = arrSums[i - 1] + nums[i];

        if (intSum > nums[i]) {
            arrSums.push(intSum);
            intMax = intMax > intSum ? intMax : intSum
        } else {
            arrSums.push(nums[i]);
            intMax = intMax > nums[i] ? intMax : nums[i];
        }
    }

    return intMax;

};