/**
 * @param {string} s
 * @return {number}
 */
function romanToInt(s){
    const values = {
         'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }
    let result = 0;
    for(let i = 0; i < s.length; i++){
        const currentVal = values[s[i]]
        const nextVal = values[s[i + 1]]
       
        if(nextVal && currentVal < nextVal){
            result += nextVal - currentVal;
            i++;
        } else{
            result += currentVal
        }
    }
    return result
}