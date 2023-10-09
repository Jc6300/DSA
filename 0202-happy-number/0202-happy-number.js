/**
 * @param {number} n
 * @return {boolean}
 */
const isHappy = n =>{
    let seen = {}
    while (n !== 1 && !seen[n]){
        seen[n] = true
        n = sumOfSquares(n)
    }
return n === 1
}

const sumOfSquares = numString => numString.toString().split('').reduce((sum,num) => sum + Math.pow(num,2),0)