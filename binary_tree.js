class BinaryTreeNode {
    left = null;
    right = null;
    key = 0;
    value = 0;

    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
} 

class BinaryTree {
    root = null;

    constructor() {}

    add(key, value) {
        const newNode = new BinaryTreeNode(key, value);

        if (!this.root) {
            this.root = newNode;
        } else {
            this._add(this.root, newNode);
        }
    }

    _add(rootNode, node) {
        if (rootNode.key > node.key) {
            if (!rootNode.left) {
                rootNode.left = node;
            } else {
                this._add(rootNode.left, node);
            }
        }

        if (rootNode.key < node.key) {
            if (!rootNode.right) {
                rootNode.right = node;
            } else {
                this._add(rootNode.right, node);
            }
        }
    }
}

const tree = new BinaryTree();
tree.add(1, 'test');
tree.add(-2, 'test4');
tree.add(-4, 'test4');
tree.add(5, 'test5');
tree.add(-10, 'test4');
tree.add(100, 'test100');
tree.add(9, 'test9');
tree.add(10, 'test10');

console.log(tree);