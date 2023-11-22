/**
 * @param {string} s
 * @return {number}
 */
const countHomogenous = s => {
    const mod = 10**9 + 7
    let count = 0
    let prev = ''
    let length = 0



    for(let i = 0; i < s.length; i++){
        if(s[i] === prev){
            length++
        }
        else {
            prev = s[i]
            length = 1
        }
        count = (count + length) % mod
    }
    return count
};