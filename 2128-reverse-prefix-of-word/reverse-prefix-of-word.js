/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {
    const i = word.indexOf(ch)

    if (i === -1){
        return word
    }

    const reversedPart = word.slice(0, i + 1).split('').reverse().join('')
    const remainingPart = word.slice(i + 1)

    return reversedPart + remainingPart
};