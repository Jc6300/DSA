/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    let x = []
    for(let i = 0; i < 2; i++){
for(let num of nums){
    x.push(num)
}
    }
    return x
};