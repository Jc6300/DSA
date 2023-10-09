/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */


class TreeNode{
    constructor( val, left = null, right = null){
        this.val = val
        this.left = left
        this.right = right
    }
}

function sortedArrayToBST(nums){
    if (nums.length === 0){
        return null
    }

    const middleIndex = Math.floor(nums.length / 2)
    const root = new TreeNode(nums[middleIndex])

    root.left = sortedArrayToBST(nums.slice(0, middleIndex))
    root.right= sortedArrayToBST(nums.slice(middleIndex + 1))

    return root
}