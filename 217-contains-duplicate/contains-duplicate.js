/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
 // Create a Set to store unique numbers
    const seen = new Set()
//loop over each num in array
    for (let num of nums){
        //If the number is already in the Set, we found a duplicate
        if (seen.has(num)) return true
        // if we haven't seen the number, add it to the set
        seen.add(num)
    }
    // f no duplicates were found, return false
    return false
};