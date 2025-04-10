/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(operations) {
    const stack = []

    for(const op of operations){
        if(op === '+'){
            const top = stack.pop()
            const newTop = top + stack[stack.length - 1]
            stack.push(top)
            stack.push(newTop)
        }
        else if(op === 'D'){
            stack.push(2 * stack[stack.length - 1])
        }else if (op === 'C'){
            stack.pop()
        }else {
            stack.push(parseInt(op))
        }
    }
    return stack.reduce((a,b)=> a + b, 0 )
};