/**
 * @param {number} num
 * @return {string}
 */
const intToRoman=(num)=> {


 const romanSymbols = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    const romanValues = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

    let result = "";

    for (let i = 0; i < romanSymbols.length; i++) {
        while (num >= romanValues[i]) {
            num -= romanValues[i];
            result += romanSymbols[i];
        }
    }

    return result;
}