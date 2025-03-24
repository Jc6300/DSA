/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    const n = Math.floor(s.length / 2);
    for (let i = 0; i < n; i++) {
   
        [s[i], s[s.length - i - 1]] = [s[s.length - i - 1], s[i]];
    }
};