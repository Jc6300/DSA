/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
const reverseBetween = function(head, left, right) {
  if (!head || left === right) return head;

  let prev = null, curr = head;
  for (let i = 0; i < left - 1; i++) {
    prev = curr;
    curr = curr.next;
  }

  let tail = curr, next = curr.next;
  for (let i = left; i < right; i++) {
    const temp = next.next;
    next.next = curr;
    curr = next;
    next = temp;
  }

  tail.next = next;
  if (prev) {
    prev.next = curr;
    return head;
  } else {
    return curr;
  }
};