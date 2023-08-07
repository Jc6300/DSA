/**
 * @param {Function[]} functions
 * @return {Function}
 */


function compose(func){
    return x => func.reduceRight((acc,fn) => fn(acc), x)
}
/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */