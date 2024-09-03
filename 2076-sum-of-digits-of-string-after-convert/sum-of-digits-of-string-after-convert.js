/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var getLucky = function (s, k) {
    let arr = ""
    for (let i = 0; i < s.length; i++) {
        arr += (s.charCodeAt(i) - 96).toString()
    }
    while (k > 0) {
        let sum = 0
        for (let i = 0; i < arr.length; i++) {
            sum += Number(arr[i])
        }
        arr = sum.toString()
        if (sum < 10) break
        k--
    }
    return arr
};
 