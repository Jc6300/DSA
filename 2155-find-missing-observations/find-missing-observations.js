/**
 * @param {number[]} rolls
 * @param {number} mean
 * @param {number} n
 * @return {number[]}
 */
var missingRolls = function(rolls, mean, n) {
    const m = rolls.length;
    const totalSum = mean * (n + m);
    const sumOfGivenRolls = rolls.reduce((acc, val) => acc + val, 0);
    const sumOfMissingRolls = totalSum - sumOfGivenRolls;

    if (sumOfMissingRolls < n || sumOfMissingRolls > 6 * n) {
        return [];
    }

    const result = new Array(n).fill(Math.floor(sumOfMissingRolls / n));
    let remainder = sumOfMissingRolls % n;

    for (let i = 0; i < n; i++) {
        if (remainder > 0) {
            result[i]++;
            remainder--;
        }
    }

    return result;
};
