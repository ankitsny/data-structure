class Node {
    constructor (val) {
        this.val = val;
        this.next = null;
    }
}
const head = new Node(1);
const n2 = new Node(2)
const n3 = new Node(3)
const n4 = new Node(4)
const n5 = new Node(5)
const n6 = new Node(6)
const n7 = new Node(7)
const n8 = new Node(8)

head.next = n2;
n2.next = n3;
n3.next = n4;
n4.next = n5;
n5.next = n6;
n6.next = n7;
n7.next = n8;
n8.next = n3; // cycle

// console.log(JSON.stringify(head, null, 2))

function checkLoop(l) {
    let slow = l;
    let fast = l;

    while (slow && fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;

        if (fast === slow) {
            // Cycle
            break;
            // return true;
        }
    }
    if (slow === fast) {
        slow = head;
        while (slow.next != fast.next) {
            slow = slow.next;
            fast = fast.next;
        }
        console.log("Fixing Loop", fast);
        fast.next = null;
    }
    return false;
}

console.log(checkLoop(head) )