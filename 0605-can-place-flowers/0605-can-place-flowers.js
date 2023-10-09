/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */

function canPlaceFlowers(flowerbed, n) {
  let count = 0; 
  
  for (let i = 0; i < flowerbed.length; i++) {
    if (flowerbed[i] === 0) {
 
      const isPrevEmpty = i === 0 || flowerbed[i - 1] === 0;
      const isNextEmpty = i === flowerbed.length - 1 || flowerbed[i + 1] === 0;
      
      if (isPrevEmpty && isNextEmpty) {

        flowerbed[i] = 1; 
        count++; 
      }
    }
  }
  
  return count >= n; 
}


const flowerbed1 = [1, 0, 0, 0, 1];
const n1 = 1;
console.log(canPlaceFlowers(flowerbed1, n1)); // Output: true

const flowerbed2 = [1, 0, 0, 0, 1];
const n2 = 2;
console.log(canPlaceFlowers(flowerbed2, n2)); // Output: false
