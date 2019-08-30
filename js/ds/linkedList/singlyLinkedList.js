class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        const node = new Node(val);
        this.length += 1;
        // Check if list is empty
        if (this.head === null){
            // First element
            this.head = node;
            this.tail = node;
            return this;
        }
        // add newly created node to the next of current tail
        this.tail.next = node;
        // Update the current tail
        this.tail = node;
        return this;
    }

    // Delete from the tail
    pop() {
        if (!this.length) return null;

        if (this.length === 1) {
            this.length = 0;
            this.head = null;
            this.tail = null;
            return null;
        }

        // Traverse to the second last node
        // and set the value to next = null
        let current = this.head;
        let newTail = this.head;
        while (current.next !== null) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length -= 1;
        return current;
    }

    shift () {
        // Remove values from the head
        if (!this.head) return null;
        const curr = this.head;
        this.head = this.head.next;
        this.length -= 1;

        if (this.length === 0){
            this.head = null;
            this.tail = null;
        }

        return curr;
    }

    unshift (val) {
        // Adding new node from the begining
        const node = new Node(val);
        node.next = this.head;
        this.head = node;
        this.length += 1;
        if (this.length === 1) {
            this.tail = this.head;
        }
        return this;
    }

    get (index) {
        if (index < 0 || this.length <= index) return null;
        let node = this.head;
        while (index--) {
            node = node.next;
        }
        return node;
    }

    set (index, val) {
        // if (index < 0 || this.length <= index) return false;
        // let node = this.head;
        // while (index--) {
        //     node = node.next;
        // }
        // node.val = val;

        const node = this.get(index)
        if (node) {
            node.val = val;
            return true
        }
        return false;
    }

    insert (index, val) {
        if (index === 0) {
            return !!this.unshift(val)
        }
        const node = this.get(index - 1);
        if (node) {
            const newNode = new Node(val);
            newNode.next = node.next;
            node.next = newNode;
            this.length += 1;
            return !!newNode;
        }
        return false;
    }

    remove (index) {
        if (index < 0 || index >= this.length) return false;
        if (index === 0) return !!this.shift();
        if (index === this.length - 1) return !!this.pop()

        const prevNode = this.get(index - 1);
        if (!prevNode) return false;

        const nodeTodel = prevNode.next;

        prevNode.next = nodeTodel.next;
        this.length -= 1;
        return true;
    }


    reverse () {
        let prev = null;
        let next = null;
        let curr = this.head;
        let tail = this.head;
        while (curr) {
            next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        this.head = prev;
        this.tail = tail
        this.tail.next = null;
    }

    reverseRec (curr = this.head, next = null, prev = null, tail = this.head) {
        if (!curr) {
            this.head = prev;
            this.tail = tail
            this.tail.next = null;
            return ;
        }

        next = curr.next;
        curr.next = prev;

        prev = curr;
        curr = next;
        this.reverseRec(curr, next, prev);
        // return
    }

}   


const sl = new SinglyLinkedList();
sl.push("Hello");
sl.push("World1");
sl.push("World2");
sl.push("World3");
// sl.push("World4");
// sl.push("World POP");
// const popedVal = sl.pop();
// console.log(popedVal)

// const shiftVal = sl.shift();
// console.log("Sifted VAL: ", shiftVal);

// sl.unshift(10)
// sl.unshift(11)
// sl.unshift(12)
// sl.push("1")
// sl.push("2")
// sl.pop()

// const at0 = sl.get(0)
// console.log(at0)

// sl.set(0, "Hello")
// sl.set(5, "World")

// sl.insert(1, "Ankit")
// sl.remove(0)
sl.reverseRec();
console.log(JSON.stringify(sl, null, 2));