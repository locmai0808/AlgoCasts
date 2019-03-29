class Node {
  constructor(data) {
    this.data = data;
    this.right = null;
    this.left = null;
  }
}

var Tree = new Node(1);
Tree.left = new Node(2);
Tree.right = new Node(3);
Tree.left.left = new Node(4);
Tree.left.right = new Node(5);
Tree.right.right = new Node(6);
Tree.right.right.right = new Node(9);
Tree.right.right.left = new Node(8);
Tree.left.left.left = new Node(10);
Tree.left.left.right = new Node(7);

/*
        1
       / \
      2   3
     / \   \
    4   5   6
   / \     / \
  10  7   8   9
*/

function levelOfNode(Tree, key, level = 0) {
  if (!Tree) return -1;
  if (Tree.data === key) return level;
  let downLevel = levelOfNode(Tree.left, key, level + 1);
  if (downLevel != -1) return downLevel;
  downLevel = levelOfNode(Tree.right, key, level + 1);
  return downLevel;
}

function lowestCommonAncestor(node, n1, n2) {
  if (!node) return null;
  if (node.data === n1 || node.data === n2) return node;
  let left = lowestCommonAncestor(node.left, n1, n2);
  let right = lowestCommonAncestor(node.right, n1, n2);
  if (left && right) return node;
  return left ? left : right;
}

function bftraversal(node) {
  let arr = [node];
  while (arr.length) {
    let cur = arr.shift();
    console.log(cur.data);
    if (cur.left) arr.push(cur.left);
    if (cur.right) arr.push(cur.right);
  }
}

function heightOfTree(node) {
  if (!node) return 0;
  let left = heightOfTree(node.left);
  let right = heightOfTree(node.right);
  return left > right ? left + 1 : right + 1;
}

function getHeight(root) {
  if (!root) return 0;
  return 1 + Math.max(getHeight(root.left), getHeight(root.right));
}

function isBinaryTreeBalanced(root) {
  if (!root) return null;
  return Math.abs(getHeight(root.left) - getHeight(root.right)) <= 1;
}

console.log(isBinaryTreeBalanced(Tree));

// let lca = lowestCommonAncestor(Tree, 7, 9);
// let d1 = levelOfNode(lca, 7);
// let d2 = levelOfNode(lca, 9);
// console.log(heightOfTree(Tree));
