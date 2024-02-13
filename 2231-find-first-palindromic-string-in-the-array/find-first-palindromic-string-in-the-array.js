/**
 * @param {string[]} words
 * @return {string}
 */
 function firstPalindrome(words) {
    // Helper function to check if a word is a palindrome
    function isPalindrome(word) {
        return word === word.split('').reverse().join('');
    }

    // Iterate over the words
    for (let word of words) {
        // If the word is a palindrome, return it
        if (isPalindrome(word)) {
            return word;
        }
    }

    // If no palindromic word is found, return an empty string
    return '';
}