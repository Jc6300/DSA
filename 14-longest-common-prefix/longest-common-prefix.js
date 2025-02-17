/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
   if (strs.length === 1) {
            return strs[0];
        }
        
        strs.sort();
        let N = Math.min(strs[0].length, strs[strs.length - 1].length);
        for (let i = 0; i < N; i++) {
            if (strs[0][i] !== strs[strs.length - 1][i]) {
                return strs[0].slice(0, i);
            }
        }
        return strs[0];
};