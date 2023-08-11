/**
 * @param {Function[]} functions
 * @return {Function}
 */


function compose(functions){
return functions.reduce((curr, prev) => x => curr(prev(x)), x => x)
}
/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */