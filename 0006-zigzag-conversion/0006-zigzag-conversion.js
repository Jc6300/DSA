/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
const  convert = (s, numRows) => {
    if( numRows  === 1 || numRows >= s.length){
        return s
    }


    const rows = Array.from({length: Math.min(numRows, s.length) }, () => '')
    let currRow = 0
    let dir = -1

    for(const char of s){
        rows[currRow] += char
        if(currRow === 0  || currRow === numRows - 1){
         dir *= -1
        }
        currRow += dir
    } 
    return rows.join('')
};