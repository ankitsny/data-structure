class Node {
    constructor (value, priority) {
        this.val = value;
        this.priority = priority;
    }
}

class PriorityQueue {
    constructor () {
        this.data = [];
    }
    enque (val, priority) {
        const node = new Node(val, priority);
        this.data.push(node);
        this._bubbleUp(this.data.length-1)
    }
    parent (index) {
        if (index === 0) return -1;
        return Math.floor((index-1)/2);
    }
    _bubbleUp (index) {
        // if (index === 0) return this.data;
        while(index > 0) {
            const p = this.parent(index);
            if (this.data[p].priority > this.data[index].priority) {
                const t = this.data[p];
                this.data[p] = this.data[index];
                this.data[index] = t;
            }
            index = p;
        }
        return this.data;
    }

    _getChildsInd (index) {
        return  [(2 * index) + 1, (2 * index) + 2 ]
        // return [this.data[left], this.data[right]];
    }
    swap (i, j) {
        const tmp = this.data[i];
        this.data[i] = this.data[j];
        this.data[j] = tmp;
    }
    dequeue () {
        if (this.data.length === 0) return undefined;
        const node = this.data.shift();
        this.data.unshift(this.data.pop())
        this._bubbleDown();
        return node.val;
    }
    _bubbleDown (index = 0) {
        while (index < this.data.length) {
            const [leftInd, rightInd] = this._getChildsInd(index);

            const lNode = this.data[leftInd];
            const rNode = this.data[rightInd];
            const node = this.data[index];
            if (rNode &&  (rNode.val < lNode.val) && (rNode.val < node.val)) {
                this.swap(rightInd, index);
                index = rightInd;
                continue;
            }
            if (lNode && (lNode.val < node.val)) {
                this.swap(leftInd, index);
                index = leftInd;
                continue;
            }
            break;
        }
    }
}

const pq = new PriorityQueue();
pq.enque("a", 0);
pq.enque("b", 1);
pq.enque("c", 2);
pq.enque("d", 3);
pq.enque("e", 4);
pq.enque("f", 5);
pq.enque("g", 6);
console.log(pq);
let min = pq.dequeue();
console.log('min =', min,  pq);

min = pq.dequeue();
pq.enque("hello", 34)
console.log(pq);
