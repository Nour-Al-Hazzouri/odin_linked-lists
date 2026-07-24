import Node from "./Node.js";

class LinkedList {
  #headNode = null;
  set head(node) {
    this.#headNode = node;
  }
  get Head() {
    return this.#headNode;
  }
  append(value) {
    const node = new Node();
    node.value = value;
    if (this.Head === null) {
      this.head = node;
    } else {
      const tempNode = this.Head;
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = node;
    }
  }
}
export default LinkedList;
