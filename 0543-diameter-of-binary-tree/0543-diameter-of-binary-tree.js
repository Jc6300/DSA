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
class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

const diameterOfBinaryTree = function (root) {
  let diameter = 0;

  const dfs = (node) => {
    if (!node) return 0;

    // Recursively calculate the depth of the left and right subtrees
    const leftDepth = dfs(node.left);
    const rightDepth = dfs(node.right);

    // Update the diameter at each node
    diameter = Math.max(diameter, leftDepth + rightDepth);

    // Return the depth of the subtree rooted at this node
    return 1 + Math.max(leftDepth, rightDepth);
  };

  dfs(root);

  return diameter;
};
