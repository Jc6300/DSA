/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
const copyRandomList = (head) => {
    if (!head) return null;
    
    // Step 1: Create a copy of each node and insert it after the original node.
    let current = head;
    while (current) {
        const copy = new Node(current.val);
        copy.next = current.next;
        current.next = copy;
        current = copy.next;
    }
    
    // Step 2: Update the random pointers of the copied nodes.
    current = head;
    while (current) {
        if (current.random) {
            current.next.random = current.random.next;
        }
        current = current.next.next;
    }
    
    // Step 3: Separate the original list and copied list.
    current = head;
    const newHead = head.next;
    let newCurrent = newHead;
    
    while (current) {
        current.next = newCurrent.next;
        current = current.next;
        if (current) {
            newCurrent.next = current.next;
            newCurrent = newCurrent.next;
        }
    }
    
    return newHead;
};