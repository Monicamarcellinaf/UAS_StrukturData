class MyQueue {
    constructor() {
        this.stack1 = [];
        this.stack2 = [];
    }

    push(x) {
        this.stack1.push(x); // Tambahkan elemen ke stack1
    }

    pop() {
        if (this.stack2.length === 0) {
            while (this.stack1.length > 0) {
                this.stack2.push(this.stack1.pop()); // Pindahkan elemen dari stack1 ke stack2
            }
        }
        return this.stack2.pop(); // Ambil elemen dari stack2
    }

    peek() {
        if (this.stack2.length === 0) {
            while (this.stack1.length > 0) {
                this.stack2.push(this.stack1.pop());
            }
        }
        return this.stack2[this.stack2.length - 1]; // Elemen terdepan ada di stack2
    }

    empty() {
        return this.stack1.length === 0 && this.stack2.length === 0; // Kosong jika kedua stack kosong
    }
}

// Penggunaan
const queue = new MyQueue();
queue.push(1);
queue.push(2);
console.log(queue.peek());  // Output: 1
console.log(queue.pop());   // Output: 1
console.log(queue.empty()); // Output: false
