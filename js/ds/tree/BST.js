class Node {
    constructor (val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}


class BST {
    constructor () {
        this.root = null;
    }

    insert (val) {
        const node = new Node(val);
        if (!this.root) {
            this.root = node;
            return;
        }
        let current = this.root;
        while (true) {
            if (current.val === val) return undefined;
            if (val < current.val) {
                if (current.left === null) {
                    current.left = node;
                    return this;
                } else {
                    current = current.left;    
                }
            } else {
                if (current.right === null) {
                    current.right = node;
                    return this;
                } else {
                    current = current.right;
                }
            }
        }
    }

    find (val) {
        if (!this.root) {
            return undefined;
        }

        let current = this.root;

        while (current) {
            if (current.val === val) return current;
            if (val < current.val) current = current.left;
            if (val > current.val) current = current.right;
        }
        return current;
    }

    delete1 (val, node = this.root) {
        
        if (!node) return node;

        if (val < node.left) {
            this.delete1(val, node.left);
            return node;
        } else {
            this.delete1(val, node.right);
            return node;
        }
        // console.log("1", JSON.stringify(node));   
    }


    BFS () {
        let queue = [this.root];
        let data = [];
        while (queue.length) {
            let node = queue.shift();
            data.push(node);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        return data;
    }

    DFSPreOrder () {
        const data = [];
        function traverse (node) {
            if (!node) return
            data.push(node.val);
            traverse(node.left);
            traverse(node.right);
        }
        traverse(this.root);
        return data;
    }

    DFSInOrder () {
        const data = [];
        function traverse (node) {
            if (!node) return;
            traverse(node.left)
            data.push(node.val);
            traverse(node.right);
        }
        traverse(this.root);
        return data;
    }

    DFSPostOrder () {
        const data = [];
        function traverse (node) {
            if (!node) return;
            traverse(node.left);
            traverse(node.right);
            data.push(node.val);
        }
        traverse(this.root)
        return data;
    }

    TopView () {
        const q = [{node: this.root, depth: 0}];
        const m = {};

        while (q.length) {
            const tmp = q.shift();
            if (m[tmp.depth] === undefined || m[tmp.depth] === null) {
                console.log(tmp.node.val + ' ');
                m[tmp.depth] = tmp.node.val;
            }
            if (tmp.node.left) {
                q.push({node: tmp.node.left, depth: tmp.depth -1 });
            }
            if (tmp.node.right) {
                q.push({node: tmp.node.right, depth: tmp.depth + 1});
            }
        }
    }
}


const bst = new BST();
bst.insert(10);
bst.insert(6);
bst.insert(15);
bst.insert(3);
bst.insert(8);
bst.insert(20);

// console.log(bst.find(11))
console.log(bst.TopView());
// console.log(JSON.stringify(bst, null, 2));
