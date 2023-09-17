/**
 * @param {string} s
 * @return {string}
 */
function reverseVowels(s) {
  // Convert the string to an array of characters for easier manipulation.
  const chars = s.split('');
  
  // Define a set of vowels to check against (both lower and upper case).
  const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
  
  // Initialize two pointers.
  let left = 0;
  let right = chars.length - 1;
  
  while (left < right) {
    // Find the next vowel from the left side.
    while (left < right && !vowels.has(chars[left])) {
      left++;
    }
    
    // Find the next vowel from the right side.
    while (left < right && !vowels.has(chars[right])) {
      right--;
    }
    
    // Swap the vowels.
    [chars[left], chars[right]] = [chars[right], chars[left]];
    
    // Move the pointers towards the center.
    left++;
    right--;
  }
  
  // Convert the array back to a string and return it.
  return chars.join('');
}
