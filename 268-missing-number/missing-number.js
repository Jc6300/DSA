/**
 * @param {number[]} nums
 * @return {number}
 */
const missingNumber = (nums) => {
    // calcute all expected sum of all numbers 0 - n
    const expectedSum = (nums.length * (nums.length + 1)) / 2
    // calculate sum of elems in array
    const actualSum = nums.reduce((acc,num) => acc + num,0)
      // The missing number is the difference between the expected and actual sum
    return expectedSum - actualSum
};