/**
 * @param {string} s
 * @return {string}
 */
function reverseVowels(s) {
    const vowels = 'aeiouAEIOU';
    let left = 0;
    let right = s.length - 1;
    const arr = Array.from(s);
    
    while (left < right) {
        if (!vowels.includes(arr[left])) {
            left++;
            continue;
        }
        if (!vowels.includes(arr[right])) {
            right--;
            continue;
        }
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
    }
    
    return arr.join('');
}
