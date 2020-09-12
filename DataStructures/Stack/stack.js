class Stack {
    constructor() {
        this.stack = [];
    }

    push(item) {
        this.stack.push(item);
    }

    pop() {
        if (this.stack.length === 0) {
            console.log("underflow....")
        }
        else
            return this.stack.pop();
    }

    peek() {
        return this.stack[this.stack.length - 1];
    }

    traverse() {
        for (let i = this.stack.length - 1; i >= 0; i--) {
            console.log(this.stack[i]);
        }
    }
}


module.exports = {
    Stack
}