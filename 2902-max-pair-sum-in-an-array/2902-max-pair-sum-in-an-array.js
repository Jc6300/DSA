/**
 * @param {number[]} nums
 * @return {number}
 */
//  function getMaxSumWithEqualMaxDigit(nums){
//       let maxSum = -1
//       for(let i = 0; o < nums.length; i ++){
//           for(let j = i + 1; j < nums.length; j++){
//               if(Math.max(...nums[i].toString().split('').map(Number)) === Math.max(...nums[j].toString().split('').map(Number))) {
//                   maxSum = Math.max(maxSum, nums[i] + nums[j])
//               }
//           }
//       }
//       return maxSum
//  }


function maxSum(nums) {
    let maxSum = -1;
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (Math.max(...nums[i].toString().split('').map(Number)) === Math.max(...nums[j].toString().split('').map(Number))) {
                maxSum = Math.max(maxSum, nums[i] + nums[j]);
            }
        }
    }
    return maxSum;
}

