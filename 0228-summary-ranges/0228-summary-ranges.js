/**
 * @param {number[]} nums
 * @return {string[]}
 */
function summaryRanges(nums) {
   const result = [] 
   for(let i = 0; i < nums.length;i++){
       let start = nums[i]
       while(i + 1 < nums.length && nums[i + 1] === nums[i] + 1){
           i++
       }
       let end = nums[i]
       if(start === end ){
           result.push(start.toString())
       }else {
           result.push(`${start}->${end}`)
       }
   }
   return result
};


    