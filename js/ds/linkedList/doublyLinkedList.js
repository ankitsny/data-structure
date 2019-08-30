class Node {
    constructor (val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor () {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push (val) {
        const node = new Node(val);
        if (this.length === 0){
            this.head = node;
            this.tail = node;
        }else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
        this.length += 1;
    }

    pop () {
        if (this.length === 0) return undefined;
        
        const tail = this.tail;
        
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            const prev = tail.prev;
            prev.next = null;
            this.tail = prev;
        }
        
        this.length -= 1;
        return tail;
    }

    shift () {
        if (!this.head) return false;

        if (this.length === 1) {
            this.head = null;
            this.tail = null;
            return
        }
        const next = this.head.next;
        next.prev = null;
        this.head = next;

        this.length -= 1;
    }

    unshift (val) {
        if (!this.length) {
            return !!this.push(val)
        }
        const oldHead = this.head;

        const node = new Node(val);
        node.prev = null;
        node.next = oldHead;
        
        oldHead.prev = node;

        this.head = node;
        this.length += 1;
        return true;
    }

    get (index) {
        if (index < 0 || index >= this.length) {
            return undefined
        }
        
        if (this.length === 1) {
            return this.head;
        }

        let node = this.head;

        while (index--) {
            node = node.next;
        }
        return node;
    }

    set (index, val) {
        let node = this.get(index);
        if (!node) return false;

        node.val = val;
        return true;
    }

    insert (index, val) {
        if (index === 0 || this.length === index) {
            this.length += 1;
            return !!this.push(val);
        }

        const node = this.get(index);

        if (!node) return false;

        const newNode = new Node(val);
        const prevNode = node.prev;
        prevNode.next = newNode;
        newNode.prev = prevNode;

        newNode.next = node;
        node.prev = newNode;
        this.length += 1;
        return true
    }

    remove (index) {
        if (index < 0 || index >= this.length) return false;

        if (index === 0) return !!this.shift()

        if (index + 1 === this.length) return !!this.pop();

        const node = this.get(index);

        node.prev.next = node.next;
        node.next.prev = node.prev;
        this.length -= 1;
        return true;
    }


    reverse () {
        if (this.length === 0) return this;
        const oldHead = this.head;
        const oldTail = this.tail;
        let len = this.length
        let node = this.head;
        while (len--) {
            const tmp = node.next;
            node.next = node.prev;
            node.prev = tmp;

            node = tmp;
        }
        this.head = oldTail;
        this.tail = oldHead;
        return this;
    }

}

const dl = new DoublyLinkedList();
dl.push(1);
dl.push(2);
dl.push(3);
// const last = dl.pop()
// console.log(dl)

// dl.shift();
// dl.unshift("Hello");
// const val = dl.get(3)
// dl.set(1, "Hello WOrld")
// const val = dl.get(1);

// dl.insert(1, 1.1);
// dl.remove(0)
dl.reverse()
console.log(dl.get(0))