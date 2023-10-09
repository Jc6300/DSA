/**
 * @param {Function} fn
 */
function memoize(fn) {
    let cache = new Map()
    return (...args) => {
        const key = JSON.stringify(args)
        return cache.has(key) ? cache.get(key) : cache.set(key, fn(...args)).get(key)
    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */