/**
 * @param {number} x
 * @return {boolean}
 */
 function isPalindrome(x) {
    if (x < 0) return false;
    let reversed = 0, y = x;
    while( y > 0){
        const lastDigit = y % 10;
        reversed = (reversed * 10) + lastDigit;
        y = Math.floor(y / 10);
    }
    return x === reversed;
};