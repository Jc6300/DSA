/**
 * @param {number} x
 * @return {number}
 */
const mySqrt = (x) => {
    if ( x === 0 || x ===1){
        return x
    }

    let guess = x
    while(true){
        const newGuess = (guess + x / guess) / 2

        if(Math.abs(newGuess - guess) < 1e-6){
            return Math.floor(newGuess)
        }
        guess = newGuess
    }
};