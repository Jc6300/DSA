/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let prev = null;
    let current = head;
    while(current != null) {
        let nextTemp = current.next; // Temporarily store the next node
        current.next = prev; // Reverse the 'next' pointer
        prev = current; // Move pointers one position ahead.
        current = nextTemp;
    }
    return prev;
};


var reverseList = function(head) {
    if(head === null || head.next === null) return head;
    let reversedListHead = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return reversedListHead;
};
