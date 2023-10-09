/**
 * @param {number} x
 * @return {number}
 */
// const mySqrt = (x) => {
//     if ( x === 0 || x === 1){
//         return x
//     }

//     let guess = x
//     while(true){
//         const newGuess = (guess + x / guess) / 2

//         if(Math.abs(newGuess - guess) < 1e-6){
//             return Math.floor(newGuess)
//         }
//         guess = newGuess
//     }
// };


function mySqrt(x) {
    if (x < 2) return x;
    let left = 1, right = Math.floor(x / 2);
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (mid * mid === x) return mid;
        else if (mid * mid < x) left = mid + 1;
        else right = mid - 1;
    }
    return right;
}