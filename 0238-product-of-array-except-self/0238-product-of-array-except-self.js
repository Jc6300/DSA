/**
 * @param {number[]} nums
 * @return {number[]}
 */
function productExceptSelf(nums) {
    let n = nums.length;
    let answer = new Array(n)
    answer[0] = 1;
    for(let i = 1; i < n; i++){
        answer[i] = nums[i - 1] * answer[i - 1];
    }
    let J = 1;
    for(let i = n - 1; i >= 0; i--){
    answer[i] = answer[i] * J;
    J *= nums[i]

    }
    return answer
}