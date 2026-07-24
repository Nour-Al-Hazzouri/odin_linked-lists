import LinkedList from "./classes/LinkedList.js";
import Node from "./classes/Node.js";

const list = new LinkedList();
const node = new Node();
console.log(list.Head);
node.value = 10;
console.log(node.Value);
list.append(node);
console.log(list.Head);
