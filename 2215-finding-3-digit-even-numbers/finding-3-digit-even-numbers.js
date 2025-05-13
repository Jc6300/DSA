/**
 * @param {number[]} digits
 * @return {number[]}
 */
var findEvenNumbers = function(digits) {
    const result = new Set()
    const n = digits.length

    for(let i = 0; i < n; i++){
        if(digits[i] === 0) continue

        for(let j= 0; j < n; j++){
            if (j === i) continue

            for( let k = 0; k < n; k++){
                if (k === i || k === j) continue
                
                if(digits[k] % 2 === 0){
                    const num = digits[i] * 100 + digits[j] * 10 + digits[k]
                    result.add(num)
                }
            }
        }
    }
    return Array.from(result).sort((a,b)=> a - b)
};