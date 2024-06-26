/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
const getDecimalValue = (head) => {
    let num = 0;
    while (head !== null) {
      num = num * 2 + head.val;
        head = head.next;
    }
    return num;
};