/**
 * @param {number[]} 
 * @return {number}
 */
const  largestAltitude = gain  => {
    prev = [0]
    biggest = 0

    for (let i =0 ; i < gain.length; i++){
       biggest += gain[i]
        prev.push(biggest)
    }
    return Math.max(...prev)
}
   