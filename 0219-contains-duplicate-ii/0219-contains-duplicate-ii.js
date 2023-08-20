/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
function containsNearbyDuplicate(nums, k){
    const numSet = new Set()

    for(let i = 0; i < nums.length; i++){
        if(i > k) {
        numSet.delete(nums[ i - k - 1])
    }
    if(numSet.has(nums[i])){
        return true
    }
    numSet.add(nums[i])
}
    return false
}