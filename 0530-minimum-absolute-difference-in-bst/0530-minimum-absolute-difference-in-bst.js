/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const getMinimumDifference = root =>{
    let minDiff = Infinity;
    let prevValue = -1;

    const inorderTraversal = (node) => {
        if (node === null) {
            return;
        }

        inorderTraversal(node.left);

        if (prevValue !== -1) {
            // Calculate the absolute difference and update the minimum difference
            minDiff = Math.min(minDiff, Math.abs(node.val - prevValue));
        }

        // Update the previous value
        prevValue = node.val;

        inorderTraversal(node.right);
    };

    inorderTraversal(root);

    return minDiff;
};