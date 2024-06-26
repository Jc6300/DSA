/**
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfThree = function(n) {
    if (n <= 0) return false;
    return Math.log10(n) / Math.log10(3) % 1 === 0;
};

