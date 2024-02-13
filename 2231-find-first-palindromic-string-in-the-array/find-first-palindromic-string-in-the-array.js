/**
 * @param {string[]} words
 * @return {string}
 */
let firstPalindrome = function(words) {
    for (const word of words){
        if (word === word.split('').reverse().join('')) return word
    }
    return ''
};