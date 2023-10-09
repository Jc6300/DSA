/**
 * @param {string} s
 * @return {number}
 */




function lengthOfLongestSubstring(s) {
    let maxLength = 0;
    let currentString = "";
    for (let i = 0; i < s.length; i++) {
        let index = currentString.indexOf(s[i]);
        if (index !== -1) {
            currentString = currentString.slice(index + 1);
        }
        currentString += s[i];
        maxLength = Math.max(maxLength, currentString.length);
    }
    return maxLength;
}
