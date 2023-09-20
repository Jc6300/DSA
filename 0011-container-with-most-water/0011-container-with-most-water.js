/**
 * @param {number[]} height
 * @return {number}
 */
  function maxArea (height) {
    let max = 0
    let left = 0
    let right = height.length -1 

    while(left < right){
        const width = right - left

        const minHeight = Math.min(height[left], height[right])
        
        const currentArea = width * minHeight

        max = Math.max(max, currentArea)

        if(height[left] < height[right]){
            left++
        }
        else{
            right--
        }
    }
    return max
};