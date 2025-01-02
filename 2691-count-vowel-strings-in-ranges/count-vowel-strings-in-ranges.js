/**
 * @param {string[]} words
 * @param {number[][]} queries
 * @return {number[]}
 */
var vowelStrings = function(words, queries) {
    const isVowel = new Set(['a','e', 'i', 'o', 'u'])
    const valid = new Array(words.length).fill(false)

    for(let i = 0; i < words.length; i++){
        valid[i] = isVowel.has(words[i][0]) && isVowel.has(words[i][words[i].length - 1])
    }
    const prefixSum = new Array(words.length).fill(0)
    prefixSum [0] = valid[0] ? 1: 0

    for(let i= 1; i < words.length; i++){
        prefixSum[i] = prefixSum[i - 1] + (valid[i] ? 1 : 0)
    }
    const ans = []
    for(const [li,ri] of queries){
        ans.push(prefixSum[ri] - (li > 0 ? prefixSum[li - 1] : 0))
    }
        return ans
};
