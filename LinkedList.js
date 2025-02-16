class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

function reverseList(head) {
    let prev = null;
    let current = head;
    while (current !== null) {
        const nextTemp = current.next; // Simpan referensi ke node berikutnya
        current.next = prev; // Balikkan arah pointer
        prev = current; // Geser prev ke current
        current = nextTemp; // Geser current ke node berikutnya
    }
    return prev; // prev menjadi head baru
}

// Membangun linked list
const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

const reversedHead = reverseList(head);
let current = reversedHead;
while (current !== null) {
    console.log(current.val); // Output: 5, 4, 3, 2, 1
    current = current.next;
}
