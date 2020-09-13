class Queue {
    constructor() {
        this.queue = [];
    }

    enqueue(item) {
        this.queue.push(item);
    }

    dequeue() {
        if (this.queue.length > 0) {
            this.queue = this.queue.splice(1, this.queue.length);
        }
        else console.log("No items in the queue, underflow...");
    }

    traverse() {
        for (let i = 0; i < this.queue.length; i++) {
            console.log(this.queue[i]);
        }
    }

    peek() {
        this.queue.length>0?this.queue[0]:console.log("No items in the queue");
    }

}

module.exports = {
    Queue
}