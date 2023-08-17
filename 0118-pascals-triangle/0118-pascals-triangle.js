/**
 * @param {number} numRows
 * @return {number[][]}
 */
function generate(numRows) {
  if (numRows === 0) {
    return [];
  }

  const result = [];

  for (let i = 0; i < numRows; i++) {
    const row = new Array(i + 1).fill(1); // Initialize the row with 1s

    // Calculate the middle elements of the row
    for (let j = 1; j < i; j++) {
      row[j] = result[i - 1][j - 1] + result[i - 1][j];
    }

    result.push(row);
  }

  return result;
}