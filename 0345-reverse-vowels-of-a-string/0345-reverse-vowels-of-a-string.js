/**
 * @param {string} s
 * @return {string}
 */
function reverseVowels(s) {
    // Get an array of all vowels
    const vowels = s.match(/[aeiou]/gi)
    // Replace all vowels with the last element in `vowels` array
    return s.replace(/[aeiou]/gi, () => vowels.pop())
};