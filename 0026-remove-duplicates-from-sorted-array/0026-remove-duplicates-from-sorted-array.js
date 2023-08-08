/**
 * @param {number[]} nums
 * @return {number}
 */
 function removeDuplicates(nums) {
    let j = 0;
    for (let i  = 0; i < nums.length; i++){
        if( i === 0 || nums[i] !== nums[i - 1]) {
            nums[j] =  nums[i];
            j++
        }
    }
    return j
};