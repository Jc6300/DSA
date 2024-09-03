/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var getLucky = function(s, k) {
 num = s.replace(/[a-z]/g, (match)=> match.charCodeAt(0) - 96)

    for(let i = 0; i < k; i++){
        num = num.toString().split('').reduce((sum, digit) => sum + parseInt(digit),0)
    }
    return num
};
 