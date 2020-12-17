var lowestCommonAncestor = function (root, p, q) {
  if (!root) {
    return null;
  }
  if (root === p || root === q) {
    return root;
  }
  let left = lowestCommonAncestor(root.left, p, q);
  let right = lowestCommonAncestor(root.right, p, q);
  if (!left) {
    return right;
  }
  if (!right) {
    return left;
  }
  return root;
};

console.log(
  lowestCommonAncestor([3, 5, 1, 6, 2, 0, 8, null, null, 7, 4], 5, 4)
);
