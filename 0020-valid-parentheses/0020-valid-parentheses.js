/**
 * @param {string} s
 * @return {boolean}
 */
function isValid(s) {
    let stack = [];
    let mapping = {")": "(", "}": "{", "]": "["};
    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        if (char in mapping) {
            let top_element = stack.length ? stack.pop() : '#';
            if (mapping[char] != top_element) {
                return false;
            }
        } else {
            stack.push(char);
        }
    }
    return !stack.length;
}
