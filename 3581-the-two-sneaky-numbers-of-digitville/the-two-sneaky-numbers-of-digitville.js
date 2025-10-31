/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSneakyNumbers = function(nums) {
  const count = new Map();
  const result = [];

  for (const num of nums) {
    count.set(num, (count.get(num) || 0) + 1);
    if (count.get(num) === 2) {
      result.push(num);
      if (result.length === 2) break;
    }
  }

  return result;

}