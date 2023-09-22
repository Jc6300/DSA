/**
 * @param {number[]} nums
 * @return {number}
 */
const pivotIndex = (nums) =>{
    const totalSum = nums.reduce((acc,num) => acc + num, 0)
    leftSum = 0

    for(let i = 0; i < nums.length; i++){
        const rightSum = totalSum - leftSum - nums[i]

        if(leftSum === rightSum){
            return i
        }
        leftSum += nums[i]
    }
    return -1
};