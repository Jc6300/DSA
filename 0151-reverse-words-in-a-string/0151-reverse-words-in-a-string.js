/**
 * @param {string} s
 * @return {string}
 */
const reverseWords = (s) => {
    const words = s.trim().split(/\s+/)
    return words.reverse().join(' ')
};




