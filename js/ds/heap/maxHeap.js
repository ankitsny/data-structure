class MaxHeap {
    constructor () {
        this.data = [];
    }
    insert (num) {
        this.data.push(num);
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
            if (this.data[p] < this.data[index]) {
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
    extractMax () {
        if (this.data.length === 0) return undefined;
        const val = this.data.shift();
        this.data.unshift(this.data.pop())
        this._bubbleDown();
        return val;
    }
    _bubbleDown (index = 0) {
        while (index < this.data.length) {
            const [leftInd, rightInd] = this._getChildsInd(index);
            const lVal = this.data[leftInd];
            const rVal = this.data[rightInd];
            const val = this.data[index];
            if (rVal > lVal && rVal > val) {
                this.swap(rightInd, index);
                index = rightInd;
                continue;
            }
            if (lVal > val) {
                this.swap(leftInd, index);
                index = leftInd;
                continue;
            }
            break;
        }
    }
}

const heap = new MaxHeap();
heap.insert(0);
heap.insert(1);
heap.insert(2);
heap.insert(3);
heap.insert(4);
heap.insert(5);
heap.insert(6);
console.log(heap);
// let max = heap.extractMax();
// console.log('max =', max,  heap);
// 
// max = heap.extractMax();
// heap.insert(34)
// console.log('max =', max,  heap);
