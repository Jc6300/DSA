/**
 * @param {number[][]} grid
 * @return {number}
 */
const equalPairs =grid => {
    const n = grid.length
    let count = 0

//create an array of strings for each row and column
    const rows = grid.map(row => row.join(','))
    const cols = Array.from({ length: n}, (_, i) => grid.map(row => row[i]).join(','))

// compare each row string with each column string
for(let i = 0; i < n; i++){
    for(let j = 0; j < n; j++){
        if(rows[i] === cols[j]){
            count++
        }
    }
}
return count
};