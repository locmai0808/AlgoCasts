class Node {
  constructor(data) {
    this.data = data;
    this.right = null;
    this.left = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  getRoot() {
    return this.root;
  }

  insert(data) {
    var newNode = new Node(data);
    if (this.root === null) this.root = newNode;
    else this.insertNode(this.root, newNode);
  }

  // helper method that calls the
  // removeNode with a given data
  remove(data) {
    // root is re-initialized with
    // root of a modified tree.
    this.root = this.removeNode(this.root, data);
  }

  // Method to remove node with a
  // given data
  // it recurrs over the tree to find the
  // data and removes it
  removeNode(node, key) {
    // if the root is null then tree is
    // empty
    if (node === null) return null;
    // if data to be delete is less than
    // roots data then move to left subtree
    else if (key < node.data) {
      node.left = this.removeNode(node.left, key);
      return node;
    }

    // if data to be delete is greater than
    // roots data then move to right subtree
    else if (key > node.data) {
      node.right = this.removeNode(node.right, key);
      return node;
    }

    // if data is similar to the root's data
    // then delete this node
    else {
      // deleting node with no children
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      }

      // deleting node with one children
      if (node.left === null) {
        node = node.right;
        return node;
      } else if (node.right === null) {
        node = node.left;
        return node;
      }

      // Deleting node with two children
      // minumum node of the rigt subtree
      // is stored in aux
      var aux = this.findMinNode(node.right);
      node.data = aux.data;

      node.right = this.removeNode(node.right, aux.data);
      return node;
    }
  }

  findMinNode(node) {
    // if left of a node is null
    // then it must be minimum node
    if (node.left === null) return node;
    else return this.findMinNode(node.left);
  }

  // search for a node with given data
  search(node, data) {
    // if trees is empty return null
    if (node === null) return null;
    // if data is less than node's data
    // move left
    else if (data < node.data) return this.search(node.left, data);
    // if data is less than node's data
    // move left
    else if (data > node.data) return this.search(node.right, data);
    // if data is equal to the node data
    // return node
    else return node;
  }

  insertNode(root, node) {
    if (node.data < root.data) {
      if (!root.left) root.left = node;
      else this.insertNode(root.left, node);
    } else {
      if (!root.right) root.right = node;
      else this.insertNode(root.right, node);
    }
  }

  minmax(node) {
    if (node) {
      this.minmax(node.left);
      console.log(node.data);
      this.minmax(node.right);
    }
  }

  maxmin(node) {
    if (node) {
      this.maxmin(node.right);
      console.log(node.data);
      this.maxmin(node.left);
    }
  }

  //good for making copy of the tree
  preorder(node) {
    if (node) {
      console.log(node.data);
      this.preorder(node.left);
      this.preorder(node.right);
    }
  }
  inorder(node) {
    if (node) {
      this.inorder(node.left);
      console.log(node.data);
      this.inorder(node.right);
    }
  }

  //good for deleting the tree;
  postorder(node) {
    if (node) {
      this.postorder(node.left);
      this.postorder(node.right);
      console.log(node.data);
    }
  }
  bftraversal(root) {
    let arr = [root];
    while (arr.length) {
      let node = arr.shift();
      console.log(node.data);
      if (node.left) arr.push(node.left);
      if (node.right) arr.push(node.right);
    }
  }
  dftraversal(root) {
    let arr = [root];
    while (arr.length) {
      let node = arr.shift();
      console.log(node.data);
      if (node.right) arr.unshift(node.right);
      if (node.left) arr.unshift(node.left);
    }
  }

  heightOfTree(node) {
    if (!node) return 0;
    let left = this.heightOfTree(node.left);
    let right = this.heightOfTree(node.right);
    return left > right ? left + 1 : right + 1;
  }

  lowestCommonAncestor(root, n1, n2) {
    while (root) {
      if (n1 < root.data && n2 < root.data) {
        root = root.left;
      } else if (n1 > root.data && n2 > root.data) {
        root = root.right;
      } else break;
    }
    return root;
  }

  levelOfNode(root, key, level = 0) {
    if (!root) return -1;
    if (root.data === key) return level;
    if (key < root.data) {
      return this.levelOfNode(root.left, key, level + 1);
    } else {
      return this.levelOfNode(root.right, key, level + 1);
    }
  }
}

// create an object for the BinarySearchTree
// var BST = new BinarySearchTree();

// Inserting nodes to the BinarySearchTree
// [11, 2, 14, 1, 7, 15, 5, 8, 13, 4, 6, 16, 20, 42, 46, 31, 24].map(value => {
//   BST.insert(value);
// });

// var root = BST.getRoot();

//console.log(BST.heightOfTree(root));
// console.log(BST.lowestCommonAncestor(root, 1, 46).data);
// let lca = BST.lowestCommonAncestor(root, 20, 24);
// let d1 = BST.levelOfNode(lca, 20);
// let d2 = BST.levelOfNode(lca, 24);
// console.log(d1 + d2);
