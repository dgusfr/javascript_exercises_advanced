class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    this.root = this._insertNode(this.root, new TreeNode(value));
  }

  _insertNode(node, newNode) {
    if (!node) return newNode;
    if (newNode.value < node.value)
      node.left = this._insertNode(node.left, newNode);
    else node.right = this._insertNode(node.right, newNode);
    return node;
  }

  search(value) {
    return this._searchNode(this.root, value);
  }

  _searchNode(node, value) {
    if (!node) return false;
    if (value < node.value) return this._searchNode(node.left, value);
    if (value > node.value) return this._searchNode(node.right, value);
    return true;
  }

  remove(value) {
    this.root = this._removeNode(this.root, value);
  }

  _removeNode(node, value) {
    if (!node) return null;
    if (value < node.value) node.left = this._removeNode(node.left, value);
    else if (value > node.value)
      node.right = this._removeNode(node.right, value);
    else {
      if (!node.left) return node.right;
      if (!node.right) return node.left;
      const minNode = this._findMinNode(node.right);
      node.value = minNode.value;
      node.right = this._removeNode(node.right, minNode.value);
    }
    return node;
  }

  _findMinNode(node) {
    while (node.left) node = node.left;
    return node;
  }
}

// Exemplo de uso:
const bst = new BinarySearchTree();
bst.insert(15);
bst.insert(25);
bst.insert(10);
console.log(bst.search(25)); // true
bst.remove(25);
console.log(bst.search(25)); // false
