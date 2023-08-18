/**
 * @param {number} rowIndex
 * @return {number[]}
 */
 
 function getRow(rowIndex){
     if (rowIndex === 0){
         return [1]
     }
     let prevRow = [1]
     for (let i = 1; i <= rowIndex; i++){
         const newRow = []
         newRow.push(1)

         for (let j = 1; j < i; j++){
             newRow.push(prevRow[j - 1] + prevRow[j])
         }
         newRow.push(1)
         prevRow = newRow
     }
     return prevRow
 }