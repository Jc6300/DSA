/**
 * @param {string} s
 * @return {boolean}
 */

   function isPalindrome(s) {
  // Step 1: Convert to lowercase and remove non-alphanumeric characters
  const cleanString = s.toLowerCase().replace(/[^a-z0-9]/g, '');

  // Step 2: Compare the clean string with its reverse
  const reversedString = cleanString.split('').reverse().join('');

  return cleanString === reversedString;
}
