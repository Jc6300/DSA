/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
function canCompleteCircuit(gas, cost){
    let totalGas = 0
    let currentGas = 0
    let startIndex = 0

    for(let i = 0; i < gas.length; i++){
        totalGas += gas[i] - cost[i]
        currentGas += gas[i] - cost[i]

     if (currentGas < 0){
         startIndex = i + 1
         currentGas = 0
     }   
    }
    return totalGas >= 0 ? startIndex : -1
}