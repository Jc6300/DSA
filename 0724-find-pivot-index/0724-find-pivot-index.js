/**
 * @param {number[]} nums
 * @return {number}
 */
function Accumulation(arr){
    return arr.reduce((a,b)=>a+b);  
}

const pivotIndex = function(nums) {
    

    // Initialization:
    // Left hand side be empty, and
    // Right hand side holds all weights.
    
    let totalWeightOnLeft = 0;
    let totalWeightOnRight = Accumulation(nums);
    
    for( let i = 0 ; i < nums.length ; i++ ){
        
        let currentWeight = nums[i];
        
        totalWeightOnRight -= currentWeight;
        
        if( totalWeightOnLeft == totalWeightOnRight ){
            // balance is met on both sides
            return i;
        }
        
        totalWeightOnLeft += currentWeight
        
        
    }
    
    return -1;
    
};