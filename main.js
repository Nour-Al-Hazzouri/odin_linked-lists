import LinkedList from "./classes/LinkedList.js";
import Node from "./classes/Node.js";

// universal list and node
const list = new LinkedList();
const node = 10;
const node2 = 20;
const node3 = 30;

// test append(value)
// console.log(list.Head);
// list.append(node);
// console.log(list.Head);

// list prepend(value)
// console.log(list.Head);
// list.prepend(node);
// console.log(list.Head);

// test size()
// list.append(node);
// list.append(node2);
// list.prepend(node3);
// console.log(list.size());

// test head()
// list.append(node);
// list.append(node2);
// console.log(list.head());

// test tail()
// list.append(node);
// list.append(node2);
// list.append(node3);
// console.log(list.tail());

//test at(index)
// list.append(10);
// list.append(20);
// list.append(30);
// console.log(list.at(3));

// test pop()
// list.append(10);
// list.append(30);
// console.log("1. " + list.head());
// console.log("2. " + list.pop());
// console.log("3. " + list.head());

// test contains(value)
// list.append(10);
// list.append(20);
// list.append(30);
// console.log(list.contains(30));

// test findIndex(value)
// list.append(10);
// list.append(20);
// list.append(30);
// console.log(list.findIndex(30));

// test toString()
// list.append(10);
// list.append(20);
// list.append(30);
// console.log(list.toString());

// test insert(index, ...values)
list.append(10);
list.append(20);
list.append(30);
list.insertAt(2, 5, 10, 15);
console.log(list.toString());
