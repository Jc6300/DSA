/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
const isPalindrome = (head) => {
// helper func to reverse LL

const reverseList =( node )=>{
    let prev = null
    while(node !== null){
        const nextNode = node.next
        node.next = prev
        prev = node
        node = nextNode
    }
    return prev
}

//find the middle of the LL using slow and fast pointers
let slow = head
let fast = head
while(fast  !== null && fast.next !== null){
    slow = slow.next
    fast = fast.next.next
}


//reverse the second half of the LL

let reversedSecondHalf = reverseList(slow)

//compare the first half of the LL
while (reversedSecondHalf !== null){
  
  if (head.val !== reversedSecondHalf.val){
      return false
  }
    head = head.next
    reversedSecondHalf = reversedSecondHalf.next
}
return true
}












