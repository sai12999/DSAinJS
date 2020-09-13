const queueClass = require('./queue');
const Queue = queueClass.Queue;

let queue = new Queue();

queue.enqueue("sam");
queue.enqueue(1);
queue.enqueue(3);
queue.traverse();
queue.dequeue();
queue.traverse();
queue.dequeue();
queue.traverse();
queue.dequeue();
queue.traverse();
queue.dequeue();
queue.traverse();